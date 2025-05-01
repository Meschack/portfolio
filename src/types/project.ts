import { ReactElement } from 'react'

export type ProjectType = {
  image: string
  num?: number
  title: string
  description: ReactElement
  link: string
}
