import React, { useReducer, useState } from 'react'
// các thành phần :
// reducer : là nơi xử lí các action và cập nhật state 
// action : đại diện cho chức năng cần xử lí 
// state : trạng thái của reducer 

const reducer = (state = 0, action: string) => {
    // action là hành vi đc gửi lên thông qua dispatch
    switch (action) {
        case "increment1":
            return state + 1;
        case "increment2":
            return state + 2;
        case "increment3":
            return state + 3;
        default:
            return state;
    }
}

const Home = () => {
    // const[count, setCount] = useState(0);
    const [count, dispatch] = useReducer(reducer,0,undefined);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch("increment1")}>Tăng count lên 1</button>
            <button onClick={() => dispatch("increment2")}>Tăng count lên 2</button>
            <button onClick={() => dispatch("increment3")}>Tăng count lên 3</button>
        </div>
    )
}

export default Home
