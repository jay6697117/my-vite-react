import Parent from '@/components/Parent'
import { type CustomCompProps } from './types'
import './App.less'

// App组件
const App: React.FC<CustomCompProps> = (props: CustomCompProps) => {
  return (
    <div className='app'>
      <h1>{JSON.stringify(props.info)}</h1>
      <Parent />
    </div>
  )
}

export default App
