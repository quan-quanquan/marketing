import { useAppSelector, useAppDispatch } from '@/hooks'
import { addCondition } from '../ruleSlice';
import { Button } from '@douyinfe/semi-ui';
import { ComparisonComponent } from './operation/comparison';

export function ConditionComponent (props) {
  const { rules } = useAppSelector(state => state.rule)
  const { conditions } = rules[0]
  const dispatch = useAppDispatch()

  return <div>
    <Button style={{marginBottom: '12px'}} onClick={() => dispatch(addCondition({ruleIndex: 0, condition: {}}))}>添加条件</Button>
    {
      conditions.map((item: any) =>(
        <ComparisonComponent key={item.uid} style={{marginBottom: '12px'}}/>
      ))
    }
  </div>
}