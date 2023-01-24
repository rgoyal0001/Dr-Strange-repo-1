import React from "react";
import { ComponentB } from "./ComponentB";
import { ComponentC } from "./ComponentC";

export const ComponentA=()=>{
    return (
        <div style={{'marginTop':'20px'}}>
            <ComponentB/>
            <br />
            <br />
            <br />
            <ComponentC/>
        </div>
    )
}