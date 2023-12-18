import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Nullable } from '@/types'
import { FlowGraph } from './graph'
import { FlowStencil } from './stencil'

interface IState {
  graph: Nullable<FlowGraph>,
  stencil: Nullable<FlowStencil>
}

const initialState: IState = {
  graph: null,
  stencil: null
}

export const flowSlice = createSlice({
  name: 'flow',
  initialState,
  reducers: {
    setGraph(state, action:PayloadAction<FlowGraph>) {
      state.graph = action.payload
    },
    setStencil(state, action:PayloadAction<FlowStencil>) {
      state.stencil = action.payload
    }
  }
})

export const flowReducer = flowSlice.reducer
export const flowName = flowSlice.name
export const { setGraph, setStencil } = flowSlice.actions