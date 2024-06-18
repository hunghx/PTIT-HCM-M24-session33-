import React, { useRef } from 'react'


const Timer = () => {
    const input = useRef<HTMLInputElement|null>(null);
    const printInput = ()=>{
    
        console.log(input.current?.value);
    }
  return (
    <div>
        <h1>Timer</h1>
        <h2>00:00:00</h2>
        <input ref={input} type='text' placeholder='Nhạp ten' defaultValue={"abc..."} />
        <button onClick={printInput}>In giá trị ô input</button>
    </div>
  )
}

export default Timer
