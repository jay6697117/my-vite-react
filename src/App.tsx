import { FC, ReactElement, useEffect, useRef } from 'react'
import './App.css'

type Props = {
  [x: string]: any
  children?: ReactElement
}

// const App: FC<Props> = (props: Props) => {
//   console.log('props:', props)
//   const [count, setCount] = useState(0)
//   console.log('count', count)

//   const add = () => {
//     setCount(count+1)
//   }

//   return (
//     <>
//       <h1>{count}</h1>
//       <button className='bg-slate-300' onClick={add}>
//         +
//       </button>
//     </>
//   )
// }

/*
const App: FC<Props> = (props: Props) => {
  // console.log('props:', props)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        console.log('posts 1:', posts)
        return setPosts(posts)
      });
  }, []);

  useEffect(() => {
    // 这个副作用仅在 count 改变时执行
    console.log('posts 2:', posts)
  }, [posts]);

  return <div>{JSON.stringify(posts)}</div>
}
*/

const App: FC<Props> = (props: Props) => {
  console.log('props', props)
  const ref = useRef(null)
  console.log('立刻 ref 1:', ref)

  useEffect(() => {
    // 执行一些只需要在组件挂载时运行一次的操作
    console.log('挂载 ref 2:', ref)
    return () => {
      // 这里是清理函数，如果需要的话，它会在组件卸载时执行
      console.log('卸载 ref 3:', ref)
    }
  }, []) // 空依赖数组确保效果只运行一次

  return <div className='app' ref={ref}>{props.children}</div>
}

export default App
