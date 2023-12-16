import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  rules: any[]
}

type AddConditionPayload = {
  ruleIndex: number,
  condition: any
}

const initialState: IState = {
  rules: [
    {
      conditions: []
    }
  ]
}

export const ruleSlice = createSlice({
  name: 'rule',
  initialState,
  reducers: {
    addCondition(state, action:PayloadAction<AddConditionPayload>) {
      const { ruleIndex, condition } = action.payload
      state.rules[ruleIndex].conditions.push(condition)
    }
  }
})

export const ruleReducer = ruleSlice.reducer

export const { addCondition } = ruleSlice.actions