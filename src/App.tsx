// import { JSX } from 'react/jsx-runtime'
// import { createPortal } from 'react-dom'
import { createRoot } from 'react-dom/client'
import './App.css'
import { useState, cloneElement, ReactElement, isValidElement } from 'react'

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

// HOC
/*
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
} */

// Portal 组件
/*
const App = ({ children }: any) => {
  console.log('children', children)
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 3000)
  if (loading) return createPortal(children, document.body)
  return <h1 className='w-full h-full bg-slate-100 text-[4rem] fixed  flex justify-center items-center'>我是App组件</h1>
}
*/

// type Props = {
//   children: ReactElement<any, string | JSXElementConstructor<any>>
// }

type Props = {
  children?: ReactElement
}

const App = ({ children }: Props) => {
  console.log('children', children)
  // const [loading, setLoading] = useState(true)
  // setTimeout(() => {
  //   setLoading(false)
  // }, 3000)
  // const cloneChildren = cloneElement(children, {
  //   // 可以在这里修改 props
  // })
  console.log('isValidElement(children)', isValidElement(children))
  // console.log('isValidElement(cloneChildren)', isValidElement(cloneChildren))
  // if (loading) return cloneChildren
  // return <h1 className='w-full h-full bg-slate-100 text-[4rem] fixed  flex justify-center items-center'>我是App组件-克隆组件</h1>
  if (isValidElement(children)) return children
  return <h1>人口组件没有children</h1>
}

const container = document.getElementById('container')!
const root = createRoot(container)
root.render(<App />)
setTimeout(() => {
  root.unmount()
}, 3000)

export default App
