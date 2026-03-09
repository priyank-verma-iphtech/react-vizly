import { useState } from "react"
import Grid from "../components/Grid"
import Tooltip from "../components/Tooltip"
import DataLabels from "../components/DataLabels"

export default function LineChart({
  width,
  height,
  categories,
  series
}) {
  const [tooltip, setTooltip] = useState(null)

  const max = Math.max(...series.flatMap(s => s.data))

  const stepX = width / (categories.length - 1)

  return (
    <>
      <svg width={width} height={height}>

        <Grid width={width} height={height} />

        {series.map((s, si) => {

          const points = s.data.map((v, i) => ({
            x: i * stepX,
            y: height - (v / max) * height,
            value: v,
            label: categories[i]
          }))

          const path = points
            .map((p, i) =>
              `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`
            )
            .join(" ")

          return (
            <g key={si}>

              <path
                d={path}
                fill="none"
                stroke={s.color}
                strokeWidth={2}
              />

              {points.map((p, i) => (
                <circle
                  key={i}
                  cx={p.x}
                  cy={p.y}
                  r={4}
                  fill={s.color}
                  onMouseMove={() =>
                    setTooltip({
                      x: p.x + 20,
                      y: p.y,
                      value: p.value,
                      label: p.label
                    })
                  }
                />
              ))}

              <DataLabels points={points} />

            </g>
          )
        })}

      </svg>

      <Tooltip point={tooltip} />
    </>
  )
}