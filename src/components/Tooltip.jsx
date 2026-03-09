export default function Tooltip({ point }) {
    if (!point) return null
  
    return (
      <div
        style={{
          position: "absolute",
          left: point.x,
          top: point.y,
          background: "#000",
          color: "#fff",
          padding: "6px 10px",
          fontSize: 12,
          borderRadius: 4
        }}
      >
        {point.label}: {point.value}
      </div>
    )
  }