import { Select } from '@douyinfe/semi-ui';

export function ComparisonComponent(props) {
  const operations = [{
    label: '大于',
    value: '>'
  },{
    label: '小于',
    value: '<'
  }]
  return <div>
    <Select placeholder="选择条件运算符" optionList={operations}/>
  </div>
}