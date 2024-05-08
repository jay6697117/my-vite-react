const Error = () => {
  const htmlString: string = '<p style="color:red">this is Error</p>'

  return (
    <div className='text-lg' dangerouslySetInnerHTML={{ __html: htmlString }}></div>
  )
}

export default Error
