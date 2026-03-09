export default function Legend({ series }) {
    return (
      <div style={{ display: "flex", gap: 10 }}>
        {series.map(s => (
          <div key={s.id} style={{ display: "flex", gap: 5 }}>
            <span
              style={{
                width: 10,
                height: 10,
                background: s.color
              }}
            />
            {s.name}
          </div>
        ))}
      </div>
    )
  }