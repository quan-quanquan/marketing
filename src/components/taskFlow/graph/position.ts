import { Node, Graph } from '@antv/x6'
import { NodeID } from '../node/models'
import { store } from "@/store";

const dimension = 160
export class Position {
  graph: Graph

  constructor(graph: Graph) {
    this.graph = graph
  }

  setAveragePos(node: Node, prev:NodeID[]) {
    if (!prev.length) {
      node.position(30, 30)
    }
  
    let x = 0, y = 0
    const count = prev.length
  
    prev.forEach(id => {
      const node = this.graph.getCellById(id) as Node
      const pos = node.position()
      x += pos.x
      y += pos.y
    })
    
    node.position(x/count + dimension, y/count)
  }

  pushNext(next: NodeID[]) {
    const { nodeMap } = store.getState().flow
    next.forEach(id => {
      const node = this.graph.getCellById(id) as Node
      const pos = node.position()
      node.position(pos.x + dimension, pos.y)
      this.pushNext(nodeMap.get(id)?.next || [])
    })
  }
}
