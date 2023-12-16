import { configureStore } from '@reduxjs/toolkit';
import { ruleReducer } from '@/components/ruleEngine';
import { createWrapper } from 'next-redux-wrapper';

export const makeStore = () => {
  return configureStore({
    reducer: {
      rule: ruleReducer
    }
  })
}
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export const wrapper = createWrapper<AppStore>(makeStore);