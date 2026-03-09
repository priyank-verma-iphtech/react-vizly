export default function Grid({ width, height, rows = 5 }) {
    const lines = []
  
    for (let i = 0; i <= rows; i++) {
      const y = (height / rows) * i
  
      lines.push(
        <line
          key={i}
          x1={0}
          x2={width}
          y1={y}
          y2={y}
          stroke="#eee"
        />
      )
    }
  
    return <g>{lines}</g>
  }