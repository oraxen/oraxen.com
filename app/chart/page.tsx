"use client";

import { useEffect, useMemo, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

type ChartType = "line" | "bar" | "area" | "pie";

type GenericRecord = Record<string, unknown>;

type ChartConfig = {
  chartType: ChartType;
  data: GenericRecord[];
  title?: string;
  width?: number;
  height?: number;
  xKey?: string;
  yKey?: string;
  nameKey?: string; // for pie
  valueKey?: string; // for pie
  colors?: string[];
};

const DEFAULT_LINE_DATA = [
  { name: "Page A", value: 400 },
  { name: "Page B", value: 300 },
  { name: "Page C", value: 200 },
  { name: "Page D", value: 278 },
  { name: "Page E", value: 189 },
  { name: "Page F", value: 239 },
  { name: "Page G", value: 349 },
];

const DEFAULT_PIE_DATA = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

export default function ChartPage() {
  const [config, setConfig] = useState<ChartConfig | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!window.openai) {
      (window as any).openai = {};
    }

    let currentValue = (window as any).openai.toolOutput;

    Object.defineProperty((window as any).openai, "toolOutput", {
      get() {
        return currentValue;
      },
      set(newValue: any) {
        currentValue = newValue;
        applyToolOutput(newValue);
      },
      configurable: true,
      enumerable: true,
    });

    applyToolOutput(currentValue);
  }, []);

  const applyToolOutput = (value: any) => {
    if (!value) return;

    // Accept either nested structuredContent or direct payload
    const payload = value.structuredContent ?? value;

    const chartType: ChartType = (payload.chartType as ChartType) ?? "line";
    const xKey = (payload.xKey as string) ?? "name";
    const yKey = (payload.yKey as string) ?? "value";
    const nameKey = (payload.nameKey as string) ?? "name";
    const valueKey = (payload.valueKey as string) ?? "value";
    const width = (payload.width as number) ?? undefined;
    const height = (payload.height as number) ?? 360;
    const title = (payload.title as string) ?? undefined;
    const colors = (payload.colors as string[]) ?? [
      "#8884d8",
      "#82ca9d",
      "#ffc658",
      "#ff8042",
      "#a4de6c",
      "#d0ed57",
    ];

    let data = Array.isArray(payload.data) ? (payload.data as GenericRecord[]) : [];
    if (data.length === 0) {
      data = chartType === "pie" ? DEFAULT_PIE_DATA : DEFAULT_LINE_DATA;
    }

    setConfig({
      chartType,
      data,
      xKey,
      yKey,
      nameKey,
      valueKey,
      width,
      height,
      title,
      colors,
    });
  };

  const content = useMemo(() => {
    if (!config) return null;

    const chartType = config.chartType;
    const data = config.data;
    const height = config.height;
    const xKey = config.xKey ?? "name";
    const yKey = config.yKey ?? "value";
    const nameKey = config.nameKey ?? "name";
    const valueKey = config.valueKey ?? "value";
    const colors = config.colors;

    if (chartType === "pie") {
      return (
        <ResponsiveContainer width="100%" height={height ?? 360}>
          <PieChart>
            <Pie
              data={data as any}
              dataKey={valueKey}
              nameKey={nameKey}
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            >
              {(data as any[]).map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors![index % colors!.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      );
    }

    if (chartType === "bar") {
      return (
        <ResponsiveContainer width="100%" height={height ?? 360}>
          <BarChart data={data as any} margin={{ top: 8, right: 16, bottom: 8, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={yKey} fill={colors?.[0] ?? "#8884d8"} />
          </BarChart>
        </ResponsiveContainer>
      );
    }

    if (chartType === "area") {
      return (
        <ResponsiveContainer width="100%" height={height ?? 360}>
          <AreaChart data={data as any} margin={{ top: 8, right: 16, bottom: 8, left: 0 }}>
            <defs>
              <linearGradient id="colorY" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors?.[0] ?? "#8884d8"} stopOpacity={0.8} />
                <stop offset="95%" stopColor={colors?.[0] ?? "#8884d8"} stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey={yKey} stroke={colors?.[0] ?? "#8884d8"} fillOpacity={1} fill="url(#colorY)" />
          </AreaChart>
        </ResponsiveContainer>
      );
    }

    // default: line
    return (
      <ResponsiveContainer width="100%" height={height ?? 360}>
        <LineChart data={data as any} margin={{ top: 8, right: 16, bottom: 8, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={yKey} stroke={colors?.[0] ?? "#8884d8"} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    );
  }, [config]);

  return (
    <div className="min-h-screen w-full flex flex-col items-stretch p-4 gap-4">
      {config?.title ? (
        <h2 className="text-xl font-semibold">{config.title}</h2>
      ) : (
        <h2 className="text-xl font-semibold">Chart</h2>
      )}
      <div style={{ width: "100%", height: (config?.height ?? 360) + 24 }}>
        {content}
      </div>
    </div>
  );
}
