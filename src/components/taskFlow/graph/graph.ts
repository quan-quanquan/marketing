import { Graph } from '@antv/x6';

const defaultOptions: Graph.Options = {
  width: 800,
  height: 500,
  grid: true,
  background: {
    color: 'rgba(0,0,0,.03)'
  }
}

export default class FlowGraph {
  private graph

  constructor(options: Graph.Options) {
    this.graph = new Graph({...defaultOptions, ...options})
  }
}
