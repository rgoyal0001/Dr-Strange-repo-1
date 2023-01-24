import React from "react";
import {useSelector} from 'react-redux'

export const ComponentC=()=>{
    const {texts}=useSelector((state)=>state.text)
    return (
        <>
            {texts.map((item)=>
                <p key={item.id}>{item.title}</p>
            )}
        </>
    )
}