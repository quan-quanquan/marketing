import { FlowGraph } from "../../graph"
import { Node, NodeID } from "../../node/models"
import { MarterialShape } from "../../node/shapes"

export function isParallel(source:Node, target:Node) {
  const { next } = source
  const { prev } = target

  if (next.length > 1 || prev.length > 1) {
    return true
  }
  return false
}

export function parallelFlow(graph: FlowGraph, source:Node, target:Node) {
  const { next } = source
  const { prev } = target
  const edges: [NodeID, NodeID][] = []

  next.forEach(id => {
    edges.push([source.id, id])
  })
  prev.forEach(id => {
    edges.push([id, target.id])
  })

  graph.addNode(MarterialShape.Custom_Logic, {
    type: 'logic'
  }, prev, next)
  graph.removeEdges(edges)
}