import { Graph } from '@antv/x6';

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
      return this.createEdge({
        shape: 'edge',
        attrs: {
          line: {
            stroke: '#333',
            strokeWidth: 1,
          },
        },
        tools: ['button-remove']
      })
    }
  },
}

export class FlowGraph {
  protected graph: Graph

  constructor(options: Graph.Options) {
    this.graph = new Graph({...defaultOptions, ...options})
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
}
