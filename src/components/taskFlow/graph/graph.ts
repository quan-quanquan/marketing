import { Graph } from '@antv/x6';
import { ConnectEvent, NodeEvent } from './event';
import { Position } from './position';
import { NodeType, NodeID } from '../node/models';

const edgeMarkup = {
  shape: 'edge',
  attrs: {
    line: {
      stroke: '#333',
      strokeWidth: 1,
    },
  },
  tools: [{
    name: 'button-remove',
    args: {
      x: 0,
      y: 0
    }
  }]
}

const defaultOptions: Graph.Options = {
  width: 800,
  height: 500,
  grid: true,
  background: {
    color: 'rgba(0,0,0,.03)'
  },
  connecting: {
    allowBlank: false,
    allowNode: false,
    allowEdge: false,
    connector: {
      name: 'smooth',
      args: {
      },
    },
    createEdge() {
      return this.createEdge(edgeMarkup)
    }
  },
}

export class FlowGraph {
  protected graph: Graph
  edgeMark: any = {}
  position: Position

  constructor(options: Graph.Options) {
    this.graph = new Graph({...defaultOptions, ...options})
    this.position = new Position(this.graph)
    this.initialize()
  }

  initialize() {
    this.bindEvent()
  }

  getInnerGraph():Graph {
    return this.graph
  }

  createNode(shape:any, data:any) {
    return this.graph.createNode({
      shape,
      data,
      ports: {
        items: [
          {
            id: 'port_1',
            group: 'left',
          },
          {
            id: 'port_2',
            group: 'right',
          },
        ],
      },
      tools: ['button-remove']
    })
  }

  addEdge(source: NodeID, target: NodeID) {
    this.graph.addEdge({
      ...edgeMarkup,
      source: {
        cell: source,
        port: 'port_2'
      },
      target: {
        cell: target,
        port: 'port_1'
      }
    })
  }

  removeEdges(edges: [NodeID, NodeID][]) {
    edges.forEach(edge => {
      const [source, target] = edge
      const edgeId = this.edgeMark[`${source}-${target}`]
      this.graph.removeEdge(edgeId)
    })
  }

  addNode(shape: any, data: any, prev:NodeID[] = [], next:NodeID[] = []) {
    const node = this.createNode(shape, data)
    this.graph.addNode(node)
    prev.forEach(id => {
      this.addEdge(id, node.id)
    })
    next.forEach(id => {
      this.addEdge(node.id, id)
    })
    this.position.setAveragePos(node, prev)
    this.position.pushNext(next)
  }

  bindEvent() {
    // TODO
    const nodeEvent = new NodeEvent(this.graph)
    const connectEvent = new ConnectEvent(this)
    nodeEvent.bind()
    connectEvent.bind()
  }
}
