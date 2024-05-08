const Child = () => {
  const users = ['章三', '李四', '王五']
  return (
    <>
      {users.map((item, index) => (
        <div key={item}>
          {item} - {index}
        </div>
      ))}
    </>
  )
}

export default Child
