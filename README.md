# GraphGPT — Create Charts in ChatGPT | Visualize Data with AI

**Create beautiful, responsive charts and graphs directly inside ChatGPT.** GraphGPT is the easiest way to visualize data in ChatGPT. Generate line charts, bar graphs, pie charts, and area charts from your conversations without leaving the chat interface.

**[Try GraphGPT Now →](https://graphgpt.app)** | **[Installation Guide →](https://graphgpt.app/#how-it-works)**

![GraphGPT creating a chart in ChatGPT - Data visualization tool](https://graphgpt.app/tutorial/graphGPT_installation_step3.webp)

---

## Features

- **Visualize Data Instantly**: Generate charts from pasted tables, CSV files, or natural language descriptions—perfect for ChatGPT data visualization.
- **Multiple Chart Types**: Supports line charts, bar graphs, pie charts, and area charts for comprehensive data analysis.
- **Simple Install**: Connect to the MCP server in seconds with no authentication required—works with any ChatGPT account.
- **Interactive & Responsive**: Charts are rendered with Recharts in a secure iframe and adapt to desktop, tablet, and mobile screens.
- **Customizable**: Tweak the title, colors, dimensions, axes labels, and data keys to match your brand or analysis needs.

---

## How to Use GraphGPT

GraphGPT can visualize data from your prompts. Simply describe what you want to chart in ChatGPT:

- "Plot monthly revenue from this table."
- "Show revenue vs expenses as a multi-line chart."
- "Create a pie chart of category shares."
- "Visualize sales data as a bar graph."
- "Turn this CSV into a line chart showing trends over time."

**Learn more:** [Browse example use cases →](https://graphgpt.app)

---

## How to Install GraphGPT in ChatGPT

Get GraphGPT set up in under 2 minutes:

1.  In ChatGPT, navigate to **Settings → Apps & Connectors**.
2.  Click **Create** → **Advanced settings**.
3.  Create a new developer connector with these details:
    -   **Name**: `GraphGPT`
    -   **MCP Server URL**: `https://graphgpt.app/mcp`
    -   **Authentication**: `No authentication`

Once connected, select **GraphGPT** from the `+` menu in the message composer and ask it to create a chart.

> **Example Prompt:**  
> _"Create a line chart of monthly revenue: Jan 10, Feb 14, Mar 18. Set xKey to 'month' and yKey to 'value'."_

**📖 Full installation guide:** [Step-by-step tutorial with screenshots →](https://graphgpt.app)

---

## Frequently Asked Questions

### What is GraphGPT?
GraphGPT is a ChatGPT app that enables you to create charts and graphs directly inside your ChatGPT conversations. Simply describe your data, and GraphGPT generates beautiful visualizations.

### What chart types does GraphGPT support?
GraphGPT supports four chart types: **line charts**, **bar graphs**, **pie charts**, and **area charts**. Each chart type is fully customizable with custom colors, titles, and data keys.

### How do I add GraphGPT to ChatGPT?
Navigate to Settings → Apps & Connectors → Create → Advanced settings, then add GraphGPT using the MCP URL `https://graphgpt.app/mcp`. No authentication required.

### Can I visualize data from files or tables?
Yes! GraphGPT can generate charts from pasted tables, CSV data, or natural language descriptions. Just paste your data into ChatGPT and ask GraphGPT to visualize it.

### Is GraphGPT free to use?
Yes, GraphGPT is completely free. Simply install the MCP connector and start creating charts in ChatGPT.

### Does GraphGPT work on mobile?
Yes, all charts are responsive and adapt to mobile, tablet, and desktop screens. GraphGPT works seamlessly across all devices.

**More questions?** [Visit our FAQ page →](https://graphgpt.app)

---

## Technical Overview

This repository contains a Next.js application that provides the charting widget and the MCP server.

-   **MCP Server (`app/mcp/route.ts`)**: Exposes a `render_chart` tool that accepts chart parameters.
-   **Chart Widget (`app/chart/page.tsx`)**: A client page that renders a Recharts chart from `window.openai.toolOutput`.
-   **Host Integration (`app/layout.tsx`)**: Includes bootstrap scripts to ensure correct asset loading and navigation inside the ChatGPT iframe.
-   **CORS Middleware (`middleware.ts`)**: Handles cross-origin requests required for client-side navigation.

The `render_chart` tool returns `structuredContent` with fields like `chartType`, `data`, `xKey`, `yKey`, and other options, which the widget page consumes to render the visualization.

---

### Example Tool Payload

```json
{
  "chartType": "line",
  "title": "Monthly Revenue",
  "xKey": "month",
  "yKey": "revenue",
  "height": 360,
  "colors": ["#4f46e5"],
  "data": [
    { "month": "Jan", "revenue": 10 },
    { "month": "Feb", "revenue": 14 },
    { "month": "Mar", "revenue": 18 }
  ]
}
```

---

## Local Development

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:3000`, and the MCP server will be at `http://localhost:3000/mcp`.

---

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com). The production deployment at **graphgpt.app** demonstrates the full ChatGPT chart visualization capabilities.

The repository includes:
-   `baseUrl.ts` and `next.config.ts` for correct asset origins in iframes.
-   `middleware.ts` for handling CORS on client-side RSC fetches.
-   `app/sitemap.ts` and `public/robots.txt` configured for SEO.

After deploying, connect ChatGPT to your production MCP URL: `https://your-app.vercel.app/mcp`. Live example: [GraphGPT Production →](https://graphgpt.app)

---

## Project Structure

```
app/
  chart/              # Client page that renders Recharts from tool output
  mcp/                # MCP server exposing tools and resources
  layout.tsx          # Root layout with metadata & iframe bootstrap
  page.tsx            # Landing page with install steps and FAQs
middleware.ts         # CORS handling for RSC
next.config.ts        # Asset prefixing for iframe compatibility
```

---

## Why GraphGPT?

**GraphGPT** is the **simplest way to create charts in ChatGPT**. Unlike external chart tools that require you to leave your conversation, GraphGPT renders visualizations directly inside ChatGPT's interface using the Model Context Protocol (MCP).

**Perfect for:**
- 📊 **Data analysts** who want quick visualizations during ChatGPT conversations
- 💼 **Business professionals** creating charts from reports and tables
- 🎓 **Students** visualizing data for projects and presentations
- 🧪 **Researchers** turning data into insights without switching tools

**[Get started with GraphGPT →](https://graphgpt.app)**

---

## Related Resources

- [OpenAI Apps SDK Documentation](https://developers.openai.com/apps-sdk)
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io)
- [Next.js Documentation](https://nextjs.org/docs)
- [Recharts Documentation](https://recharts.org)
