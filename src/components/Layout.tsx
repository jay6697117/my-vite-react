import User from '../components/User'

interface Props {
  name?: string
  age?: number
  children?: React.ReactNode
}

// const Layout = ({ name, age, children }: Props) => {
//   return (
//     <>
//       <div className='p-4 bg-slate-300 h-auto'>
//         <div>name: {name}</div>
//         <div>age: {age}</div>
//         <div>children: {children}</div>
//         <User />
//       </div>
//     </>
//   )
// }

const Layout = (props: Props) => {
  console.log('props', props)
  return (
    <>
      <div className='p-4 bg-green-600 h-auto'>
        <hr />
        <div>name: {props.name}</div>
        <div>age: {props.age}</div>
        <div>children: {props.children}</div>
        <hr />
        <User />
      </div>
    </>
  )
}
Layout.defaultProps =  {
  name: '111',
  age: 223,
  children: <span className='text-red-700 text-[40px]'>333</span>
}


export default Layout
