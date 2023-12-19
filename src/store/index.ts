import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { ruleReducer, ruleName } from '@/components/ruleEngine';
import { flowReducer, flowName } from '@/components/taskFlow';

export const store = configureStore({
  reducer: {
    [ruleName]: ruleReducer,
    [flowName]: flowReducer
  }
})
export const makeStore = () => {
  return store
}
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export const wrapper = createWrapper<AppStore>(makeStore);