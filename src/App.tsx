import { FC } from 'react'
import './App.css'
import CustomComp from './components/CustomComp'
import Child from './components/Child'
import { CustomCompProps } from './types'

const App: FC = () => {
  const customCompProps: CustomCompProps = { name: 'hello', age: 22 }
  return (
    <div className='app'>
      <div className='bg-slate-300 p-8' style={{ border: '10px solid red' }}>
        Hello, JSX
      </div>
      <CustomComp {...customCompProps}>
        <Child />
      </CustomComp>
    </div>
  )
}

export default App
