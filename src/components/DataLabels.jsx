export default function DataLabels({ points }) {
    return (
      <>
        {points.map((p, i) => (
          <text
            key={i}
            x={p.x}
            y={p.y - 8}
            fontSize={10}
            textAnchor="middle"
          >
            {p.value}
          </text>
        ))}
      </>
    )
  }