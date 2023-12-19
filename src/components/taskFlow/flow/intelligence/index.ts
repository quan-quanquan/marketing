import { isParallel, parallelFlow } from './parallel'
import { Node } from "../../node/models";

export enum FlowType {
  'Parallel' = 'Parallel',
  'Series' = 'Series'
}

export function intelligentAnalyzer(source: Node, target: Node):FlowType {
  if (isParallel(source, target)) {
    return FlowType.Parallel
  }
  return FlowType.Series
}

export const intelligentFlow: Record<FlowType,any> = {
  'Parallel': parallelFlow,
  'Series': () => {}
}