import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Nullable } from '@/types'
import { FlowGraph } from './graph'
import { FlowStencil } from './stencil'

type NodeID = string
interface Node {
  id: NodeID,
  prev: NodeID[],
  next: NodeID[],
  [p: string]: any
}
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
  },
  reducers: {
    setGraph(state, action:PayloadAction<FlowGraph>) {
      state.graph = action.payload
    },
    setStencil(state, action:PayloadAction<FlowStencil>) {
      state.stencil = action.payload
    },
    updateFlow(state, action:PayloadAction<{source: NodeID[], target: NodeID}>) {

    }
  }
})

export const flowReducer = flowSlice.reducer
export const flowName = flowSlice.name
export const { setGraph, setStencil } = flowSlice.actions