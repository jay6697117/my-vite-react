import User from '../components/User'

interface Props {
  children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className='p-4 bg-red-300 h-full'>
        <div>{children}</div>
        <User />
      </div>
    </>
  )
}

export default Layout
