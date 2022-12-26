import { useState, useEffect } from 'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid';

const FormComponent =(props) => {

    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState('')
    const [formValid, setFormValid] = useState(false)

    const inputTitle = (event) => {
        setTitle(event.target.value)
    }
    
    const inputAmount = (event) => {
        setAmount(event.target.value)
    }
    
    const saveItem = (event) => {
        event.preventDefault()
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount('')
    }

    useEffect(() => {
        
        const checkData = title.trim().length > 0 && amount !== 0

        // หรือจะเขียนแบบนี้ก็ได้
        //setFormValid(checkData)

        if (checkData) {
            setFormValid(true)
        }
    },[title, amount]) 

    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input tape="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title} />
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input tape="number" placeholder="+ รายรับ, - รายจ่าย" onChange={inputAmount} value={amount} />
                </div>
                <div>
                    <button className="btn" type="submit" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent