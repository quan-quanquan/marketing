import { register } from '@antv/x6-react-shape'
import * as marterials from './material'
import { MarterialShape } from './shapes'

export function registerNodes() {
  Object.entries(marterials).forEach(([key, {NodeComponent, nodeShapa}]) => {
    register({
      shape: nodeShapa,
      width: 60,
      height: 35,
      component: NodeComponent,
      effect: ['data'],
      ports: {
        groups: {
          left: {
            position: 'left',
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                magnet: true,
                stroke: '#8f8f8f',
                r: 5,
              },
            },
          },
        },
      }
    })
  })
}

export const defaultTask = {
  'like': {
    name: '点赞',
    shape: MarterialShape.Custom_Task_Default,
    type: 'task' // TODO
  },
  'share': {
    name: '分享',
    shape: MarterialShape.Custom_Task_Default,
    type: 'task' 
  },
}

export const defaultPlay = {
  'lottery': {
    name: '抽奖',
    shape: MarterialShape.Custom_Task_Default,
    type: 'play'
  },
  'exchange': {
    name: '兑换',
    shape: MarterialShape.Custom_Task_Default,
    type: 'play'
  },
}