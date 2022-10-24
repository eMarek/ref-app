import { useRef, useState } from 'react';

const Parent = () => {
  const parentRef = useRef()
  const toggleParent = () => parentRef.current.toggleRef()
  return (
    <div style={{border: '1px solid green', padding: '10px'}}>
      <button onClick={toggleParent}>Toggle Parent</button>
      <p></p>
      <Child parentRef={parentRef} />
    </div>
  )
}

const Child = ({parentRef}) => {
  const [toggle, setToggle] = useState(false)
  const toggleChild = () => setToggle(!toggle)
  parentRef.current = { toggleRef: toggleChild }
  return <div style={{border: '1px solid red', padding: '10px'}}>
    <button onClick={toggleChild}>Toggle Child</button>
    <p>status: {toggle ? 'ON' : 'OFF'}</p>
  </div>
}

function AppRef() {
  return (
    <div style={{padding: '10px'}}>
      <p>here comes the ref thing</p>
      <Parent />
    </div>
  );
}

export default AppRef;
