import { useState } from "react";

function AppState() {
  const [number, setNumber] = useState(0)

  const handleBtn1 = () => {
    setNumber(number + 1)
  }

  const handleBtn2 = () => {
    setNumber(number + 1)
    setNumber(number + 1)
  }

  const handleBtn3 = () => {
    setNumber(number + 1)
    setNumber((prevState) => prevState + 1)
  }

  const handleBtn4 = () => {
    setNumber((prevState) => prevState + 1)
    setNumber((prevState) => prevState + 1)
  }

  const handleBtn5 = () => {
    setNumber((prevStateOuter) => {
      setNumber((prevStateInner) => {
        console.log("set number inner", prevStateInner)
        return prevStateInner + 1
      })
      console.log("set number outer", prevStateOuter)
      return prevStateOuter + 1
    })
  }

  const handleBtn6 = () => {
    setNumber(number + 1)
    setNumber((prevState) => prevState + 1)
    setNumber((prevState) => prevState + 1)
  }

  const handleBtn7 = () => {
    setNumber((prevState) => prevState + 1)
    setNumber((prevState) => prevState + 1)
    setNumber((prevState) => prevState + 1)
  }

  return (
    <div style={{ border: '1px solid purple', margin: '30px 10px', padding: '20px' }}>
      <div style={{ fontSize: '45px', marginBottom: '10px' }}>
        {number}
      </div>
      <div>
        <button style={{marginRight: '10px'}} onClick={handleBtn1}>+1</button>
        <button style={{marginRight: '10px'}} onClick={handleBtn2}>+2</button>
        <button style={{marginRight: '10px'}} onClick={handleBtn3}>+2</button>
        <button style={{marginRight: '10px'}} onClick={handleBtn4}>+2</button>
        <button style={{marginRight: '10px'}} onClick={handleBtn5}>+2</button>
        <button style={{marginRight: '10px'}} onClick={handleBtn6}>+3</button>
        <button style={{marginRight: '10px'}} onClick={handleBtn7}>+3</button>
      </div>
    </div >
  );
}

export default AppState;
