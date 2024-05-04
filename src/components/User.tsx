import UserNameContext from '../contexts/UserNameContext'

const User = () => {
  return (
    <UserNameContext.Consumer>
      {contextVal => {
        console.log('contextVal:', contextVal)
        return <h1>contextVal: {contextVal}</h1>
      }}
    </UserNameContext.Consumer>
  )
}

export default User
