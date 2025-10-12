"use client";

import { DonutChart } from "../DonutChart";

interface DataItem {
  name: string;
  amount: number;
}

const data: DataItem[] = [
  {
    name: "ChatGPT",
    amount: 59.0,
  },
  {
    name: "Microsoft Copilot",
    amount: 14.4,
  },
  {
    name: "Google Gemini",
    amount: 13.5,
  },
  {
    name: "Perplexity",
    amount: 8.7,
  },
  {
    name: "Anthropic's Claude",
    amount: 2.5,
  },
  {
    name: "Others",
    amount: 1.9,
  },
];

export const AiMarketShareChart = () => {
  return (
    <div className="mx-auto max-w-2xl pt-4">
      <h3 className="mb-4 text-center text-lg font-medium text-gray-900 dark:text-gray-50">
        AI Chatbot Market Share (Usage)
      </h3>
      <p className="text-center text-sm text-gray-700 dark:text-gray-300">
        Market distribution by platform
      </p>
      <DonutChart
        data={data}
        category="name"
        value="amount"
        className="mx-auto mt-8"
        variant="pie"
        colors={["orange", "amber", "yellow", "lime", "emerald", "teal"]}
        showTooltip={true}
        valueFormatter={(value: number) => `${value}%`}
        ariaHidden={true}
      />
    </div>
  );
};
