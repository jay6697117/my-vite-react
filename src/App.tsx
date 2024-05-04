import './App.css'
// import CustomComp from './components/CustomComp'
// import Child from './components/Child'
// import Error from './components/Error'
// import Loading from './components/Loading'
// import { CustomCompProps } from './types'
import Layout from './components/Layout'
import ClassComp from './components/ClassComp'

/* const App: FC = () => {
  const customCompProps: CustomCompProps = { name: 'hello', age: 22 }
  const isError = true
  const isLoading = false

  return (
    <div className='app'>
      <div className='bg-slate-300 p-8' style={{ border: '10px solid red' }}>
        Hello, JSX
      </div>
      <CustomComp {...customCompProps}>{isError ? <Error /> : isLoading ? <Loading /> : <Child />}</CustomComp>
      <CustomComp {...customCompProps}>
        {isError && <Error />}
        {isLoading && <Loading />}
        <Child />
      </CustomComp>
    </div>
  )
} */

import UserNameContext from './contexts/UserNameContext'
const App = () => {
  const username = '张三'

  return (
    <UserNameContext.Provider value={username}>
      <Layout>
        <div>Layout children</div>
      </Layout>
      <ClassComp />
    </UserNameContext.Provider>
  )
}

export default App
