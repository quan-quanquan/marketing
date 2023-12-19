import { createSlice, PayloadAction,  } from '@reduxjs/toolkit'
import { enableMapSet } from 'immer'
import { Nullable } from '@/types'
import { FlowGraph } from './graph'
import { FlowStencil } from './stencil'
import { NodeID, Node } from './node/models'

enableMapSet()

type Flow = NodeID[][][]
interface IState {
  graph: Nullable<FlowGraph>,
  stencil: Nullable<FlowStencil>,
  nodeMap: Map<NodeID, Node>
}

const initialState: IState = {
  graph: null,
  stencil: null,
  nodeMap: new Map()
}

export const flowSlice = createSlice({
  name: 'flow',
  initialState,
  selectors: {
    // getFlow: (state): Flow => {
    //   const { nodeMap } = state
    //   const ids = Array.from(nodeMap.keys())
      
    //   const getLines = (line: NodeID[][]) => {
    //     while(ids.length) {
    //       for (let i = 0; i < ids.length; i++) {
    //         const node = nodeMap.get(ids[i])
            
    //       }
    //     }
    //   }
    // }
    getNode: (state, id: NodeID): Node | undefined => {
      return state.nodeMap.get(id)
    }
  },
  reducers: {
    setGraph(state, action:PayloadAction<FlowGraph>) {
      state.graph = action.payload
    },
    setStencil(state, action:PayloadAction<FlowStencil>) {
      state.stencil = action.payload
    },
    updateFlow(state, action:PayloadAction<{source: NodeID[], target: NodeID}>) {

    },
    addNode(state, action:PayloadAction<Node>) {
      const node = action.payload
      const id = node.getID()
      state.nodeMap.set(id, node)
    },
    deleteNode(state, action:PayloadAction<NodeID>) {
      const id = action.payload
      state.nodeMap.delete(id)
    },
    addNodeConnection(state, action:PayloadAction<{source: NodeID, target: NodeID}>) {
      const { nodeMap } = state
      const { source, target} = action.payload
      const sourceNode = nodeMap.get(source)
      const targetNode = nodeMap.get(target)

      if (!sourceNode || !targetNode) return
      sourceNode.addNext(target)
      targetNode.addPrev(source)
    }
  }
})

export const flowReducer = flowSlice.reducer
export const flowName = flowSlice.name
export const { setGraph, setStencil, addNode, addNodeConnection } = flowSlice.actions
export const { getNode } = flowSlice.selectors
