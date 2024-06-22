import { useState } from "react";
import React from 'react'

 const Calculator=()=> {
    const [result,setResult]=useState({
        current:"0",
        total: "0",
        isInit:true,
        op:""
    });
   
    function handelnumber(val){
        let value=val;
        if(!result.isInit){
            value = result.current +value
        }
        setResult({current:value,total:result.total,isInit:false,op:result.op})
    }

    function handeloperator(val){
        const total=Calc();
        setResult({
            current:total.toString(),total:total.toString(),isInit:true,op:val
        })
    }
    function Calc(){
        let total =parseInt(result.total);
        switch(result.op){
            case "+": total += parseInt(result.current)
                break;
            case "-": total -= parseInt(result.current)
                break;
            case "/": total /= parseInt(result.current)
                break;
            case "*": total *= parseInt(result.current)
                break;
                default:total = parseInt(result.current)
        }
        return total;
    }
    function handelclear(){
        setResult({
        current:"0",
        total: "0",
        isInit:true,
        op:""
    })
    }


  return (
    <div className="calculator">
        <div className="result">{result.current}</div>
        <Calcbtn value="7" onClick={handelnumber}></Calcbtn>
        <Calcbtn value="8" onClick={handelnumber}></Calcbtn>
        <Calcbtn value="9" onClick={handelnumber}></Calcbtn>
        <Calcbtn value="/" onClick={handeloperator} className="op"></Calcbtn>
        <Calcbtn value="6" onClick={handelnumber}></Calcbtn>
        <Calcbtn value="5" onClick={handelnumber}></Calcbtn>
        <Calcbtn value="4" onClick={handelnumber}></Calcbtn>
        <Calcbtn value="*" onClick={handeloperator} className="op"></Calcbtn>
        <Calcbtn value="3" onClick={handelnumber}></Calcbtn>
        <Calcbtn value="2" onClick={handelnumber}></Calcbtn>
        <Calcbtn value="1" onClick={handelnumber}></Calcbtn>
        <Calcbtn value="-" onClick={handeloperator} className="op"></Calcbtn>
        <Calcbtn value="C" onClick={handelclear}></Calcbtn>
        <Calcbtn value="0" onClick={handelnumber}></Calcbtn>
        <Calcbtn value="=" onClick={handeloperator}></Calcbtn>
        <Calcbtn value="+" onClick={handeloperator} className="op"></Calcbtn>
    </div>
  )
}

function Calcbtn(props){
    return(
        <button className={props.className} onClick={()=>props.onClick(props.value)}>{props.value}</button>
    )
}


export default Calculator