import { useState } from 'react'
import { Button } from 'antd'

const Child: React.FC<any> = ({ getNumber }) => {
  const [number, setNumber] = useState<number>(0);
  const handleClick = () => {
    const newNumber = number + 10;
    setNumber(newNumber);
    getNumber(newNumber);
  }
  return (
    <div style={{ border: "1px solid #000", padding: 20 }}>
      <div>我是子组件</div>
      <div>子组件的number: {number}</div>
      <Button
        type="primary"
        onClick={handleClick}
      >
        +10
      </Button>
    </div>
  );
};

export default Child
