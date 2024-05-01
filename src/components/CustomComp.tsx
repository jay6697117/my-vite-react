import {ICustomCompProps} from '../types'
function MyComponent({ name, age }: ICustomCompProps) {
  return (
    <>
      <div className='bg-slate-300 p-8' style={{ marginTop: '20px', border: '10px solid red' }}>
        Hello Component!
      </div>
      <div className='mt-2 bg-blue-400 px-8 py-4 border-4 border-purple-500 border-dashed'>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
      </div>
    </>
  )
}

export default MyComponent
