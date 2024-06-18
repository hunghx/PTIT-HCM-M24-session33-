import 'bootstrap/dist/css/bootstrap.min.css';
import GrandFather from './context/GrandFather';
import { createContext } from 'react';
import Home from './reducer/Home';
import List from './memo_callback/List';
import Timer from './ref/Timer';

//  Khởi tạo context 
export const ThemeContext = createContext<{}|null>(null)

function App() {
  const data = {
    id: 10,
    name :"Nguyen van a"
  }
   // App >> GrandFather >> Father >> Son
   // Context : tao ra 1 vung dung chung 
  return (
    <>
    {/* bao bọc các component sử dụng chung global state */}
      <ThemeContext.Provider value={data}>
        <GrandFather/>
        {/* <Home/> */}
        {/* <List/> */}
        <Timer/>
      </ThemeContext.Provider>
    </>
  )
}

export default App
