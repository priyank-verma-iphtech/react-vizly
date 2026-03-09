import { useState } from "react"

export default function useZoomPan() {
  const [scale, setScale] = useState(1)
  const [offset, setOffset] = useState(0)

  function handleWheel(e) {
    e.preventDefault()
    setScale(prev => Math.max(1, prev + e.deltaY * -0.001))
  }

  function handleDrag(dx) {
    setOffset(prev => prev + dx)
  }

  return { scale, offset, handleWheel, handleDrag }
}