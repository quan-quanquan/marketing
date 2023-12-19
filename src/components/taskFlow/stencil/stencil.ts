import { Stencil } from '@antv/x6-plugin-stencil'
import { FlowGraph } from '../graph'
import { defaultTask, defaultPlay } from '../node'

const defaultOptions: Omit<Stencil.Options, 'target'> = {
  title: '编排',
  // stencilGraphWidth: 200,
  stencilGraphHeight: 0,
  // getDragNode: node => node,
  // getDropNode: node => node,
  groups: [
    {
      name: 'task',
      title: '任务',
    },
    {
      name: 'play',
      title: '玩法',
    },
  ],
}

type Target = {
  target: FlowGraph
}

export class FlowStencil {
  private stencil: Stencil
  private graph: FlowGraph

  constructor(options: Partial<Omit<Stencil.Options, 'target'>> & Target) {
    this.graph = options.target
    this.stencil = new Stencil({...defaultOptions, ...options, 
      target: this.graph.getInnerGraph()
    })
    this.initialize()
  }

  initialize() {
    this.loadMaterials()
  }

  getStencilContainer() {
    return this.stencil.container
  }

  loadMaterials() {
    const tasks = Object.values(defaultTask).map(item => {
      return this.graph.createNode(item.shape, {
        name: item.name,
        type: item.type
      })
    })
    const plays = Object.values(defaultPlay).map(item => {
      return this.graph.createNode(item.shape, {
        name: item.name,
        type: item.type
      })
    })
    this.stencil.load(tasks, 'task')
    this.stencil.load(plays, 'play')
  }
}
