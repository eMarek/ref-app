import { createContext, useContext, useState } from 'react';

const MyContext = createContext()

const Parent = () => {
  const context = useContext(MyContext)
  const toggleParent = () => context.toggleContext()
  return (
    <div style={{border: '1px solid green', padding: '10px'}}>
      <button onClick={toggleParent}>Toggle Parent</button>
      <p></p>
      <Child />
    </div>
  )
}

const Child = () => {
  const [toggle, setToggle] = useState(false)
  const toggleChild = () => setToggle(!toggle)
  const context = useContext(MyContext)
  context.toggleContext = toggleChild
  return <div style={{border: '1px solid red', padding: '10px'}}>
    <button onClick={toggleChild}>Toggle Child</button>
    <p>status: {toggle ? 'ON' : 'OFF'}</p>
  </div>
}

function AppContext() {
  const val = null
  return (
    <div style={{padding: '10px'}}>
      {val && <span> val = {val}</span>}
      <MyContext.Provider value={{toggleContext: () => {}}}>
        <p>here comes the context thing</p>
        <Parent />
      </MyContext.Provider>
    </div>
  );
}

export default AppContext;
