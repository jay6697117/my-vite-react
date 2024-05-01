import { FC } from 'react'
import './App.css'
import CustomComp from './components/CustomComp'
import { ICustomCompProps } from './types'

const App: FC = () => {
  const customCompProps: ICustomCompProps = { name: 'hello', age: 22 }
  return (
    <div className='app'>
      <div className='bg-slate-300 p-8' style={{ border: '10px solid red' }}>
        Hello, JSX
      </div>
      <CustomComp {...customCompProps} />
    </div>
  )
}

export default App
