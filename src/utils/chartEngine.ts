export const chartEngine: Record<string, string> = {
  // XY plane — {x, y} point objects
  line:        "xy",
  area:        "xy",
  scatter:     "xy",
  bubble:      "xy",
 
  // Category axis — labelled bars / columns / radar
  bar:         "category",
  column:      "category",
  radar:       "category",
 
  // FIX: funnel gets its own engine.
  // ApexCharts funnel requires {x, y} objects in data[], NOT flat numbers
  // with a separate categories array (which the "category" engine produces).
  funnel:      "funnel",
 
  // Circular — flat number[] + label[]
  pie:         "circular",
  donut:       "circular",
  radialbar:   "circular",
  polararea:   "circular",
 
  // Range / Financial — y is [min,max] | [o,h,l,c] | [min,q1,med,q3,max]
  rangebar:    "range",
  candlestick: "range",
  boxplot:     "range",
 
  // Specialty
  heatmap:     "heatmap",
  treemap:     "treemap",
};
 