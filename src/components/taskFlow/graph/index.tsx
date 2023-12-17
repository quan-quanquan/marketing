import { useRef, useEffect } from "react"
import FlowGraph from "./graph"


export function GraphComponent() {
  const graph = useRef<FlowGraph>()

  async function initializeGraph() {
    const {default: FlowGraph} = await import('./graph')
    graph.current = new FlowGraph({
      container: document.getElementById('graph') || undefined
    })
  }

  useEffect(() => {
    initializeGraph()
  }, [])

  return <div>
    <div id="graph" />
  </div>
}