import { Select } from '@douyinfe/semi-ui';
import { Scores } from '../../../dataset';

export function AddComponent(props: any) {
  const optionList = Scores.map(item => ({label: item.key, value: item.key}))
  return <div>
    <Select optionList={optionList}/>
    <span>+</span>
    <Select optionList={optionList}/>
  </div>
}