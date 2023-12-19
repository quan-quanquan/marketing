import dynamic from 'next/dynamic'
import { useRef, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/hooks'
import { setStencil } from '../flowSlice'
import { FlowStencil } from './stencil'

// TODO element is undefined
export const StencilComponent = dynamic(Promise.resolve((props: any) => {
  const stencilDom = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()
  const graph = useAppSelector(state => state.flow.graph)

  async function initializeStencil() {
    if (!graph) return
    const { FlowStencil } = await import('./stencil')
    const stencil: FlowStencil =  new FlowStencil({
      target: graph
    })

    dispatch(setStencil(stencil))
    stencilDom.current?.appendChild(stencil.getStencilContainer())
  }

  useEffect(() => {
    initializeStencil()
  }, [graph])

  // TODO className
  return <div className={props.className} ref={stencilDom}></div>
}), {
  ssr: false
})

export { FlowStencil } from './stencil'