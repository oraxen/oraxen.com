import { baseURL } from "@/baseUrl";
import { createMcpHandler } from "mcp-handler";
import { z } from "zod";

const getAppsSdkCompatibleHtml = async (baseUrl: string, path: string) => {
  const result = await fetch(`${baseUrl}${path}`);
  return await result.text();
};

type ContentWidget = {
  id: string;
  title: string;
  templateUri: string;
  invoking: string;
  invoked: string;
  html: string;
  description: string;
};

function widgetMeta(widget: ContentWidget) {
  return {
    "openai/outputTemplate": widget.templateUri,
    "openai/toolInvocation/invoking": widget.invoking,
    "openai/toolInvocation/invoked": widget.invoked,
    "openai/widgetAccessible": false,
    "openai/resultCanProduceWidget": true,
  } as const;
}

const handler = createMcpHandler(async (server) => {
  const html = await getAppsSdkCompatibleHtml(baseURL, "/");
  const chartHtml = await getAppsSdkCompatibleHtml(baseURL, "/chart");

  const contentWidget: ContentWidget = {
    id: "show_content",
    title: "Show Content",
    templateUri: "ui://widget/content-template.html",
    invoking: "Loading content...",
    invoked: "Content loaded",
    html: html,
    description: "Displays the homepage content",
  };
  server.registerResource(
    "content-widget",
    contentWidget.templateUri,
    {
      title: contentWidget.title,
      description: contentWidget.description,
      mimeType: "text/html+skybridge",
      _meta: {
        "openai/widgetDescription": contentWidget.description,
        "openai/widgetPrefersBorder": true,
      },
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/html+skybridge",
          text: `<html>${contentWidget.html}</html>`,
          _meta: {
            "openai/widgetDescription": contentWidget.description,
            "openai/widgetPrefersBorder": true,
          },
        },
      ],
    })
  );

  // Chart widget: renders Recharts-based charts at /chart using tool output
  const chartWidget: ContentWidget = {
    id: "render_chart",
    title: "Render Chart",
    templateUri: "ui://widget/chart-template.html",
    invoking: "Rendering chart...",
    invoked: "Chart rendered",
    html: chartHtml,
    description:
      "Visualize data as line, bar, area, or pie chart using Recharts",
  };

  server.registerResource(
    "chart-widget",
    chartWidget.templateUri,
    {
      title: chartWidget.title,
      description: chartWidget.description,
      mimeType: "text/html+skybridge",
      _meta: {
        "openai/widgetDescription": chartWidget.description,
        "openai/widgetPrefersBorder": true,
      },
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/html+skybridge",
          text: `<html>${chartWidget.html}</html>`,
          _meta: {
            "openai/widgetDescription": chartWidget.description,
            "openai/widgetPrefersBorder": true,
          },
        },
      ],
    })
  );

  // @ts-ignore
  server.registerTool(
    contentWidget.id,
    {
      title: contentWidget.title,
      description:
        "Fetch and display the homepage content with the name of the user",
      inputSchema: {
        name: z.string().describe("The name of the user to display on the homepage"),
      },
      _meta: widgetMeta(contentWidget),
    },
    async ({ name }) => {
      return {
        content: [
          {
            type: "text",
            text: name,
          },
        ],
        structuredContent: {
          name: name,
          timestamp: new Date().toISOString(),
        },
        _meta: widgetMeta(contentWidget),
      };
    }
  );

  // @ts-ignore
  server.registerTool(
    chartWidget.id,
    {
      title: chartWidget.title,
      description:
        "Render a chart widget using Recharts. Supports line, bar, area, pie.",
      inputSchema: {
        chartType: z
          .enum(["line", "bar", "area", "pie"]) 
          .describe("The type of chart to render"),
        data: z
          .array(z.record(z.any()))
          .describe(
            "Array of data points. For line/bar/area provide xKey/yKey fields; for pie provide nameKey/valueKey fields."
          )
          .optional(),
        xKey: z
          .string()
          .describe("X-axis key for line/bar/area charts")
          .optional(),
        yKey: z
          .string()
          .describe("Y-axis key for line/bar/area charts")
          .optional(),
        nameKey: z
          .string()
          .describe("Name key for pie charts")
          .optional(),
        valueKey: z
          .string()
          .describe("Value key for pie charts")
          .optional(),
        title: z.string().describe("Optional chart title").optional(),
        height: z.number().describe("Chart height in pixels").optional(),
        width: z.number().describe("Chart width in pixels").optional(),
        colors: z
          .array(z.string())
          .describe("Optional color palette hex values")
          .optional(),
      },
      _meta: widgetMeta(chartWidget),
    },
    async (args) => {
      const {
        chartType = "line",
        data,
        xKey,
        yKey,
        nameKey,
        valueKey,
        title,
        height,
        width,
        colors,
      } = args as Record<string, unknown>;

      const structuredContent = {
        chartType,
        data,
        xKey,
        yKey,
        nameKey,
        valueKey,
        title,
        height,
        width,
        colors,
      };

      return {
        content: [
          {
            type: "text",
            text: typeof title === "string" ? title : "Chart",
          },
        ],
        structuredContent,
        _meta: widgetMeta(chartWidget),
      };
    }
  );
});

export const GET = handler;
export const POST = handler;
