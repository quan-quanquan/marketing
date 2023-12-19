import dynamic from 'next/dynamic'
import { useRef, useEffect } from "react"
import { useAppDispatch } from "@/hooks"
import { setGraph } from "../flowSlice"
import { FlowGraph } from "./graph"

// TODO element is undefined
export const GraphComponent = dynamic(Promise.resolve((props: any) => {
  const dispatch = useAppDispatch()
  const graphDom = useRef<HTMLDivElement>(null)

  async function initializeGraph() {
    const { registerNodes } = await import('../node')
    const { FlowGraph } = await import('./graph')
    registerNodes()
    const graph: FlowGraph = new FlowGraph({
      container: graphDom.current || undefined
    })
    dispatch(setGraph(graph))
  }

  useEffect(() => {
    initializeGraph()
  }, [])

  // TODO className
  return <div className={props.className} ref={graphDom} />
}), {
  ssr: false
})
export { FlowGraph } from "./graph"
