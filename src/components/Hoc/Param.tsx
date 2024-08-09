import React, { useState } from 'react'
import { Button } from 'antd'

const Param: React.FC<any> = props => {
  const [flag, setFlag] = useState<boolean>(false)
  const handleSetFlag = () => {
    setFlag(v => !v)
  }

  return (
    <div>
      <Button className='mb-2' type='primary' onClick={handleSetFlag}>
        获取props
      </Button>
      {flag && <div>{JSON.stringify(props)}</div>}
    </div>
  )
}

export default Param
