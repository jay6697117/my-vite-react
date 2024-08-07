import { useState } from 'react'
import Child from '@/components/Child'

const Parent: React.FC<any> = () => {
  const [number, setNumber] = useState<number>(0);

  const handleGetNumber = (v: number) => {
    setNumber(v);
  }
  return (
    <>
      <div>我是父组件</div>
      <div>父组件的number: {number}</div>
      <Child
        getNumber={handleGetNumber}
      >
        大家好，我是小杜杜，一起玩转Hooks吧！
      </Child>
    </>
  );
};

export default Parent
