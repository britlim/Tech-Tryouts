import { FC } from 'react'
import cn from './some-component.module.css'

interface SomeComponentProps {
  name: string
}

export const SomeComponent: FC<SomeComponentProps> = ({ name }) => {
  return (
    <div>
      <p className={cn.bla}>Hi {name}</p>
    </div>
  )
}