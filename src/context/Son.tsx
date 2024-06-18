import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const Son = () => {
    // lấy ra data gửi từ App 
    const data = useContext(ThemeContext)
    console.log(data,"data");
    
  return (
    <div>
      <h2>Component con</h2>
    </div>
  )
}

export default Son
