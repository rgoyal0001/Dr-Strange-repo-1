import React from "react";
import {useDispatch} from 'react-redux'
import { addText } from "../Redux/Action";
import {v4 as uuid} from 'uuid'
export const ComponentB=()=>{
    const [value,setValue]=React.useState('')
    const dispatch=useDispatch()

    const handleSubmit=()=>{
        if(value==''){
            alert('PLease Enter Some value...')
            return;
        }
        const data={
            title:value,
            id:uuid()
        };
        dispatch(addText(data))
        setValue('')
    }   
    return (
        <>
            <input type="text" placeholder="Enter some text" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={()=>handleSubmit()}>Submit</button>
        </>
    )
}