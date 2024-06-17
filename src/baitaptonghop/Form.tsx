import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const FormTodo = ({handleAdd}: {handleAdd: Function}) => {
    const [title, setTitle] = useState("");
    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
       // gửi dữ liệu lên
        handleAdd(title);
        setTitle("");
    }
  return (
    <Form className="d-flex" onSubmit={handleSubmitForm}>
    <Form.Control
      type="text"
      value={title}
      onChange={e=> setTitle(e.target.value)}
      placeholder="todo somthing ...."
      className="me-2"
    />
    <Button type='submit' variant="outline-info">Thêm</Button>
  </Form>
  )
}

export default FormTodo
