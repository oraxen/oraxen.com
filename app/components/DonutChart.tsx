// Tremor DonutChart [v1.0.0]

"use client"

import React from "react"
import {
  Pie,
  PieChart as ReChartsDonutChart,
  ResponsiveContainer,
  Tooltip
} from "recharts"

import cx from "clsx"

type AvailableChartColorsKeys =
  | "blue"
  | "emerald"
  | "violet"
  | "amber"
  | "gray"
  | "cyan"
  | "pink"
  | "lime"
  | "fuchsia"
  | "orange"
  | "yellow"
  | "teal"

const AvailableChartColors: AvailableChartColorsKeys[] = [
  "blue",
  "emerald",
  "violet",
  "amber",
  "gray",
  "cyan",
  "pink",
  "lime",
  "fuchsia",
  "orange",
  "yellow",
  "teal",
]

const chartColors: Record<AvailableChartColorsKeys, string> = {
  blue: "fill-blue-500",
  emerald: "fill-emerald-500",
  violet: "fill-violet-500",
  amber: "fill-amber-500",
  gray: "fill-gray-500",
  cyan: "fill-cyan-500",
  pink: "fill-pink-500",
  lime: "fill-lime-500",
  fuchsia: "fill-fuchsia-500",
  orange: "fill-orange-500",
  yellow: "fill-yellow-500",
  teal: "fill-teal-500",
}

const tailwindHexColors: Record<AvailableChartColorsKeys, string> = {
  blue: "#3b82f6",
  emerald: "#10b981",
  violet: "#8b5cf6",
  amber: "#f59e42",
  gray: "#6b7280",
  cyan: "#06b6d4",
  pink: "#ec4899",
  lime: "#84cc16",
  fuchsia: "#d946ef",
  orange: "#f97316",
  yellow: "#eab308",
  teal: "#14b8a6",
}

function getTailwindHexColor(color: AvailableChartColorsKeys): string {
  return tailwindHexColors[color] || "#000"
}

const getColorClassName = (
  color: AvailableChartColorsKeys,
  type: "fill" | "bg",
): string => {
  const colorClass = chartColors[color] || chartColors["blue"] // fallback to blue
  if (type === "fill") {
    return colorClass
  }
  return colorClass.replace("fill-", "bg-")
}

const constructCategoryColors = (
  categories: string[],
  colors: AvailableChartColorsKeys[],
): Map<string, AvailableChartColorsKeys> => {
  const categoryColors = new Map<string, AvailableChartColorsKeys>()
  categories.forEach((category, index) => {
    categoryColors.set(category, colors[index % colors.length])
  })
  return categoryColors
}

const sumNumericArray = (arr: number[]): number =>
  arr.reduce((sum, num) => sum + num, 0)

const parseData = (
  data: Record<string, any>[],
  categoryColors: Map<string, AvailableChartColorsKeys>,
  category: string,
  activeIndex?: number,
) =>
  data.map((dataPoint, index) => {
    const colorKey =
      categoryColors.get(dataPoint[category]) || AvailableChartColors[0]
    return {
      ...dataPoint,
      color: colorKey,
      fill: getTailwindHexColor(colorKey),
      className: getColorClassName(colorKey, "fill"),
      opacity:
        activeIndex !== undefined ? (index === activeIndex ? 1 : 0.3) : 1,
    }
  })

const calculateDefaultLabel = (data: any[], valueKey: string): number =>
  sumNumericArray(data.map((dataPoint) => dataPoint[valueKey]))

const parseLabelInput = (
  labelInput: string | undefined,
  valueFormatter: (value: number) => string,
  data: any[],
  valueKey: string,
): string => labelInput || valueFormatter(calculateDefaultLabel(data, valueKey))

//#region Tooltip

type TooltipProps = Pick<ChartTooltipProps, "active" | "payload">

type PayloadItem = {
  category: string
  value: number
  color: AvailableChartColorsKeys
}

interface ChartTooltipProps {
  active: boolean | undefined
  payload: PayloadItem[]
  valueFormatter: (value: number) => string
}

const ChartTooltip = ({
  active,
  payload,
  valueFormatter,
}: ChartTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div
        className={cx(
          // base
          "rounded px-2 py-1 text-xs shadow-md",
          // border color
          "border border-gray-200 dark:border-gray-800",
          // background color
          "bg-white dark:bg-gray-950",
        )}
      >
        {payload.map(({ value, category }, index) => (
          <div
            key={`id-${index}`}
            className="flex items-center justify-between gap-2"
          >
            <span className="whitespace-nowrap text-gray-700 dark:text-gray-300">
              {category}
            </span>
            <span className="whitespace-nowrap font-medium tabular-nums text-gray-900 dark:text-gray-50">
              {valueFormatter(value)}
            </span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

// Unused function - commented out to fix build warnings
// const renderInactiveShape = (props: any) => {
//   const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, className } =
//     props

//   return (
//     <Sector
//       cx={cx}
//       cy={cy}
//       innerRadius={innerRadius}
//       outerRadius={outerRadius}
//       startAngle={startAngle}
//       endAngle={endAngle}
//       className={className}
//       fill=""
//       opacity={0.3}
//       style={{ outline: "none" }}
//     />
//   )
// }

// Unused function - commented out to fix build warnings
// const renderActiveShape = (props: any) => {
//   const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, className } =
//     props

//   return (
//     <Sector
//       cx={cx}
//       cy={cy}
//       innerRadius={innerRadius}
//       outerRadius={outerRadius}
//       startAngle={startAngle}
//       endAngle={endAngle}
//       className={className}
//       fill=""
//       opacity={1}
//       style={{ outline: "none" }}
//     />
//   )
// }

type DonutChartVariant = "donut" | "pie"

type BaseEventProps = {
  eventType: "sector"
  categoryClicked: string
  [key: string]: number | string
}

type DonutChartEventProps = BaseEventProps | null | undefined

interface DonutChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Record<string, any>[]
  category: string
  value: string
  colors?: AvailableChartColorsKeys[]
  variant?: DonutChartVariant
  valueFormatter?: (value: number) => string
  label?: string
  showLabel?: boolean
  showTooltip?: boolean
  onValueChange?: (value: DonutChartEventProps) => void
  tooltipCallback?: (tooltipCallbackContent: TooltipProps) => void
  customTooltip?: React.ComponentType<TooltipProps>
  ariaHidden?: boolean
}

const DonutChart = React.forwardRef<HTMLDivElement, DonutChartProps>(
  (
    {
      data = [],
      value,
      category,
      colors = AvailableChartColors,
      variant = "donut",
      valueFormatter = (value: number) => value.toString(),
      label,
      showLabel = false,
      showTooltip = true,
      onValueChange,
      tooltipCallback,
      customTooltip,
      className,
      ariaHidden = false,
      ...other
    },
    forwardedRef,
  ) => {
    const CustomTooltip = customTooltip
    const [activeIndex, setActiveIndex] = React.useState<number | undefined>(
      undefined,
    )
    const isDonut = variant === "donut"
    const parsedLabelInput = parseLabelInput(label, valueFormatter, data, value)

    const categories = Array.from(new Set(data.map((item) => item[category])))
    const categoryColors = constructCategoryColors(categories, colors)

    const prevActiveRef = React.useRef<boolean | undefined>(undefined)
    const prevCategoryRef = React.useRef<string | undefined>(undefined)

    const handleShapeClick = (data: any) => {
      if (!onValueChange) return
      onValueChange({
        eventType: "sector",
        categoryClicked: data[category],
        ...data,
      })
    }

    const handleMouseEnter = (data: any, index: number) => {
      setActiveIndex(index)
    }

    const handleMouseLeave = () => {
      setActiveIndex(undefined)
    }

    // Memoize the pie data with color property for both Pie and Tooltip
    const pieData = React.useMemo(
      () => parseData(data, categoryColors, category, activeIndex),
      [data, categoryColors, category, activeIndex],
    )

    return (
      <div ref={forwardedRef} className={cx("w-full", className)} {...other}>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%" aria-hidden={ariaHidden}>
            <ReChartsDonutChart>
              {isDonut && showLabel && (
                <text
                  className="fill-gray-900 text-sm dark:fill-gray-50"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  x="50%"
                  y="50%"
                >
                  {parsedLabelInput}
                </text>
              )}
              <Pie
                className={cx(
                  "[&_.recharts-pie-sector]:outline-hidden stroke-white dark:stroke-gray-950",
                  onValueChange ? "cursor-pointer" : "cursor-default",
                )}
                data={pieData}
                cx="50%"
                cy="50%"
                startAngle={90}
                endAngle={-270}
                innerRadius={isDonut ? "75%" : "0%"}
                outerRadius="100%"
                stroke=""
                strokeLinejoin="round"
                dataKey={value}
                nameKey={category}
                isAnimationActive={false}
                onClick={handleShapeClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ outline: "none" }}
              />
              {showTooltip && (
                <Tooltip
                  wrapperStyle={{ outline: "none" }}
                  isAnimationActive={false}
                  content={({ active, payload }) => {
                    // Use fill directly from payload for color
                    const cleanPayload = payload
                      ? payload.map((item: any) => ({
                          category: item.payload[category],
                          value: item.value,
                          color: item.payload.fill,
                        }))
                      : []

                    const payloadCategory: string = cleanPayload[0]?.category

                    if (
                      tooltipCallback &&
                      (active !== prevActiveRef.current ||
                        payloadCategory !== prevCategoryRef.current)
                    ) {
                      tooltipCallback({
                        active,
                        payload: cleanPayload,
                      })
                      prevActiveRef.current = active
                      prevCategoryRef.current = payloadCategory
                    }

                    return showTooltip && active ? (
                      CustomTooltip ? (
                        <CustomTooltip active={active} payload={cleanPayload} />
                      ) : (
                        <ChartTooltip
                          active={active}
                          payload={cleanPayload}
                          valueFormatter={valueFormatter}
                        />
                      )
                    ) : null
                  }}
                />
              )}
            </ReChartsDonutChart>
          </ResponsiveContainer>
        </div>
      </div>
    )
  },
)

DonutChart.displayName = "DonutChart"

export { DonutChart, type DonutChartEventProps, type TooltipProps }
