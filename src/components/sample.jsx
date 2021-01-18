import React, { useState } from "react";

const Dummy = () =>{

    const [val1, setVal1] = useState("");
    const [val2, setVal2] = useState("");
    const [res, setRes] = useState("");

    const sumTwo = ()=>{
        setRes(val1+val2)
    }

    return(
        <div>
            <input value = {val1}  onChange = {(e)=>setVal1(e.target.value)}/>
            <input value = {val2} onChange = {(e)=>setVal2(e.target.value)}/>
            <input value = {res} />
            <button onClick={sumTwo}>sum</button>
        </div>
    )
}

export default Dummy;