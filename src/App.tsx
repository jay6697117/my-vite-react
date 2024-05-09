import { FC, ReactElement, useState, useEffect } from 'react'
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

export default App
