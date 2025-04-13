import React,{useEffect, useRef,useState} from 'react'

function UseRefH() {
    //Use ref does not trigger the re-render
    //But use state trigger re-ender
    const [inputValue,setInputValue]=useState('');
    const inputRef=useRef<HTMLInputElement>(null);
    useEffect(()=>{
       inputRef.current && inputRef.current.focus();
    },[]);
  return (
    <>
      <input 
      type="text"
      placeholder='Type something...'
      value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)}
      ref={inputRef}
      />
    </>
  )
}

export default UseRefH;