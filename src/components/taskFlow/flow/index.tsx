import { useEffect, useState } from "react";
import dynamic from 'next/dynamic'
import './index.scss'

export function FlowComponent() {
  // TODO element is undefined
  const GraphComponent = dynamic(() => import('../graph').then(m => m.GraphComponent), {
    ssr: false
  })
  const StencilComponent = dynamic(() => import('../stencil').then(m => m.StencilComponent), {
    ssr: false
  })

  async function initializeNodes() {
    const { registerNodes } = await import('../node')
    registerNodes()
  }

  useEffect(() => {
    initializeNodes()
  }, [])

  return <div className="flow-container">
    <StencilComponent className="flow-stencil" />
    <GraphComponent className="flow-graph" />
  </div>
}