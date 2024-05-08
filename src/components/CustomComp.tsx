import { CustomCompProps } from '../types'

const CustomComp = ({ name, age, children }: CustomCompProps) => {
  console.log('children:', children)
  return (
    <>
      <div className='bg-slate-300 p-8' style={{ marginTop: '20px', border: '10px solid red' }}>
        Hello CustomComp!
      </div>
      <div className='mt-2 bg-blue-400 px-8 py-4 border-4 border-purple-500 border-dashed'>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
      </div>
      <div className='bg-slate-300 p-8' style={{ marginTop: '20px', border: '10px solid red' }}>
        {children}
      </div>
    </>
  )
}

export default CustomComp
