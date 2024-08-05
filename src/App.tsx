import { type FC } from 'react'
import { type CustomCompProps } from './types'
import './App.css'

const App: FC<CustomCompProps> = (props: CustomCompProps) => {
  console.log('props', props)
  return <h1>{JSON.stringify(props.info)}</h1>
}

export default App
