import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './components/Parent'

function App() {
  const [isHide , setIsHide] = useState(false);
  return (
    <>
      <div>
        {!isHide && <Parent/>} 
        <button onClick={()=>setIsHide(!isHide)}>Toggle Parent</button>
       </div>
    </>
  )
}

export default App
