export function normalizeSeries(series) {
    return series.map((s, i) => ({
      id: i,
      name: s.name,
      data: s.data || [],
      color: s.color || `hsl(${i * 60},70%,50%)`
    }))
  }