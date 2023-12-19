import { useState } from 'react'
import { Select } from '@douyinfe/semi-ui'
import { MarterialShape } from '../shapes'

export const NodeComponent = (props: any) => {
  const { node } = props
  // const { name } = node.getData()
  const logics = [{
    label: '且',
    value: 'and'
  },{
    label: '或',
    value: 'or'
  }]
  const [ logic, setLogic ] = useState('and')
  
  function onChange(v) {
    setLogic(v)
  }

  return (
    <div className="react-node" style={{
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #ccc',
      height: '100%',
      width: '100%',
      borderRadius: '4px'
    }}>
      <Select 
        value={logic}
        optionList={logics}
        onChange={onChange} 
      />
    </div>
  )
}

export const nodeShapa = MarterialShape.Custom_Logic
