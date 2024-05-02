import { FC } from 'react'
import './App.css'
import CustomComp from './components/CustomComp'
import Child from './components/Child'
import Error from './components/Error'
import Loading from './components/Loading'
import { CustomCompProps } from './types'

const App: FC = () => {
  const customCompProps: CustomCompProps = { name: 'hello', age: 22 }
  const isError = true
  const isLoading = false
/*
  if (isError) {
    return <Error />
  }
  if (isLoading) {
    return <Loading />
  }
*/

  return (
    <div className='app'>
      <div className='bg-slate-300 p-8' style={{ border: '10px solid red' }}>
        Hello, JSX
      </div>
      {/* <CustomComp {...customCompProps}>{isError ? <Error /> : isLoading ? <Loading /> : <Child />}</CustomComp> */}
      <CustomComp {...customCompProps}>
        {isError && <Error />}
        {isLoading && <Loading />}
        <Child />
      </CustomComp>
    </div>
  )
}

export default App
