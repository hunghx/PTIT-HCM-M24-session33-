import { useEffect, useState } from "react"

const MyComp = () => {
    // controlled component 
    // useState : là hook quản lí trạng thái của component 
    const [name, setName] = useState(""); // chuỗi 
    const [age, setAge] = useState(""); // số nguyên
    const [gender, setGender] = useState("true"); // chuỗi

    console.log("State =>>>",{name, age, gender});

    // useEffect : là hook dùng can thiieepj vào vòng đời component
    // có 3 cách dùng
    useEffect(()=>{
        // ko có phụ thuộc : tự gọi sau khi component được mount hoặc sau mỗi lần update
        console.log("useEffect ko có dependency");

        // return trong useEffect là 1 hàm dọn dẹp 
        return ()=>{
            console.log("dọn dẹp rác trước khi component bị unmounted");
        }
    })
    useEffect(()=>{
        // có 1 phụ thuộc là mang rỗng : được gọi 1 lần duy nhất sau khi component đc mount
        console.log("useEffect có phụ thuộc là 1 mảng rỗng"); 
    },[])
    useEffect(()=>{
        // có 2 phụ thuộc là name và age : đc gọi sau khi component đc mount hoặc 
        // sau khi có sự thay đổi của 2 phụ thuộc là name hoặc age
        console.log("useEffect có phụ thuộc là 1 mảng ko rỗng");
    },[name, age])
  return (
    <div>
        <form>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="nhap ten" /><br />
            <input type="number" value={age} onChange={e=>setAge(e.target.value)} placeholder="nhap tuoi"  /> <br />
            <select value={gender} onChange={e=>setGender(e.target.value)}>
                <option value="true">Nam</option>
                <option value="false">Nữ</option>
            </select>
        </form>
    </div>
  )
}

export default MyComp
