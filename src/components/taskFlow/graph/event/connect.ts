import { FlowGraph } from "..";
import { store } from "@/store";
import { intelligentAnalyzer, FlowType, intelligentFlow } from '../../flow/intelligence';
import { addNodeConnection } from '../../flowSlice';

export class ConnectEvent {
  graph: FlowGraph
  
  
  constructor(graph: FlowGraph) {
    this.graph = graph
  }

  bind() {
    this.onConnected()
  }

  onConnected() {
    const innerGraph = this.graph.getInnerGraph()
    innerGraph.on('edge:connected', ({ isNew, edge }) => {
      if (!isNew) return
      console.log('connect: ', edge)
      // TODO
      const { nodeMap } = store.getState().flow
      const source = edge.getSourceCellId()
      const target = edge.getTargetCellId()
      const sourceNode = nodeMap.get(source)
      const targetNode = nodeMap.get(target)
      if (!sourceNode || !targetNode) return

      this.graph.edgeMark[`${source}-${target}`] = edge.id

      store.dispatch(addNodeConnection({
        source,
        target
      }))

      const type:FlowType = intelligentAnalyzer(sourceNode, targetNode)
      intelligentFlow[type](this.graph, sourceNode, targetNode)
    })
  }
}