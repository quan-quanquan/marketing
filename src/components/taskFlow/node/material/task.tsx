import { MarterialShape } from '../shapes'

export const NodeComponent = (props: any) => {
  const { node } = props
  const { name } = node.getData()
  
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
      {name}
    </div>
  )
}

export const nodeShapa = MarterialShape.Custom_Task_Default
