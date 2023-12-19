import { Graph } from '@antv/x6';
import { store } from '@/store'
import { addNode } from '../../flowSlice';
import { TaskNode, PlayNode, LogicNode, NodeType } from '../../node/models';

export class NodeEvent {
  graph: Graph
  
  constructor(graph: Graph) {
    this.graph = graph
  }

  bind() {
    this.onAdd()
  }

  onAdd() {
    this.graph.on('node:added', ({cell, index, options}) => {
      console.log(cell)
      const { type } = cell.data
      switch(type as NodeType) {
        case 'logic':
          store.dispatch(addNode(new LogicNode(cell.id)))
          break
        case 'play':
          store.dispatch(addNode(new PlayNode(cell.id)))
          break
        case 'task':
          store.dispatch(addNode(new TaskNode(cell.id)))
          break
        default:
          console.error('unknown node type')
      }
    })    
  }
}