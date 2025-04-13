import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EfxComponent from './components/useEffectH';
import { DataFetcher } from './components/useEfxget';
import UseRefH from './components/useRefH';
import PropDrill from './components/propDrill';
function App() {
  const [count, setCount] = useState(0);
  const [inputValue , setInputValue]=useState<string>("");
  const [toggle,setToggle]=useState(true);
  useEffect(()=>{
    console.log("Rerendered!");
  },[count])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>You clicked {count}times</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <input 
        type='text'
        placeholder='Type something...'
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        />
        <p>
          You typed: {inputValue}
        </p>

       
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {toggle && <EfxComponent/>}
      <button onClick={()=>setToggle(!toggle)}>Toggle</button>

      <DataFetcher/>
      <UseRefH/>
      <PropDrill state={inputValue}/>
      
    </>
  )
}

export default App
