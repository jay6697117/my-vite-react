import { JSX } from 'react/jsx-runtime'
import './App.css'
import { useState } from 'react'
// import CustomComp from './components/CustomComp'
// import Child from './components/Child'
// import Error from './components/Error'
// import Loading from './components/Loading'
// import { CustomCompProps } from './types'
// import Layout from './components/Layout'
// import ClassComp from './components/ClassComp'
// import Form from './components/Form'

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

// import UserNameContext from './contexts/UserNameContext'
// interface LayoutProps {
//   name?: string
//   age?: number
// }

// const App = () => {
//   const username = '张三'
//   // const layoutProps: LayoutProps = { name: 'hello', age: 22 }

//   return (
//     <UserNameContext.Provider value={username}>
//       <Layout {...layoutProps} >
//         <span className='text-red-700'>Layout children</span>
//       </Layout>
//       <Layout />
//       <ClassComp />
//     </UserNameContext.Provider>
//   )
// }

// const App = () => {
//   const submit = (data: any) => {
//     console.log('父组件data: ', data)
//   }
//   return <Form onSubmit={submit} />
// }

function MyComponent(props: { name: string }) {
  return <div className='p-4 bg-slate-100 text-[4rem]'>hello {props.name}</div>
}

function Loading() {
  return <div className='p-4 bg-slate-100 text-red-600 text-[4rem]'>loading 666...</div>
}

const withLoadingFn = (MyComp: (props: { name: string }) => JSX.Element) => {
  return (props: { isLoading: boolean }) => {
    if (props.isLoading) return <Loading />
    return <MyComp name='111' />
  }
}

const WithLoadingComp = withLoadingFn(MyComponent)

const App = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 3000)
  return <WithLoadingComp isLoading={loading} />
}

export default App
