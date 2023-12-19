import { useEffect, useState } from "react";
import dynamic from 'next/dynamic'
// export { registerNodes } from '../node'
import './index.scss'
// import { registerNodes } from "../node";

export function FlowComponent() {
  // TODO element is undefined
  const GraphComponent = dynamic(() => import('../graph').then(m => m.GraphComponent), {
    ssr: false
  })
  const StencilComponent = dynamic(() => import('../stencil').then(m => m.StencilComponent), {
    ssr: false
  })

  // registerNodes()

  // async function initializeNodes() {
  //   const { registerNodes } = await import('../node')
  //   registerNodes()
  // }
  // initializeNodes()

  // useEffect(() => {
  //   initializeNodes()
  // }, [])

  return <div className="flow-container">
    <StencilComponent className="flow-stencil" />
    <GraphComponent className="flow-graph" />
  </div>
}