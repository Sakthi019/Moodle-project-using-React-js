import React, { useState } from "react";
import './useState.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Menu } from "../menu bar/menu";

export function Usestate(){
    const [add,setAdd]=useState(0);
    function reset(){
        setAdd(add*0);
    }
    return(
        <>
        <Menu/>
        <div className="row pic p-5">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 cen bg-light bor">
                <h1 className="text-center">{add}</h1>
                <div><button onClick={()=>{setAdd(add+1)}} className="bg-success bon my-2">ADD</button><br/>
                    <button onClick={()=>{setAdd(add-1)}} className="bg-danger bon my-2">LESS</button><br/>
                    <button onClick={reset} className="bg-info bon my-2">RESET</button></div>
            </div>
            <div className="col-lg-4"></div>
        </div>
        </>
    );
}