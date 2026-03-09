import { useRef } from "react"
import LineChart from "./charts/LineChart"
import useResizeObserver from "./hooks/useResizeObserver"
import { parseData } from "./utils/parseData"
import { normalizeSeries } from "./utils/normalizeSeries"
import Legend from "./components/Legend"

export default function VizlyChart({
  type = "line",
  data,
  x,
  y,
  series
}) {

  const ref = useRef()

  const size = useResizeObserver(ref)

  let parsedSeries = series
  let categories = []

  if (data && x && y) {
    const parsed = parseData(data, x, y)
    parsedSeries = parsed.series
    categories = parsed.categories
  }

  parsedSeries = normalizeSeries(parsedSeries)

  return (
    <div ref={ref} style={{ width: "100%", height: 400 }}>

      <Legend series={parsedSeries} />

      {type === "line" && (
        <LineChart
          width={size.width}
          height={350}
          categories={categories}
          series={parsedSeries}
        />
      )}

    </div>
  )
}