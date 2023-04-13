import React, { useState } from "react";
import './fruit count.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Menu } from "../menu bar/menu";
import banana from './banana.gif';
import mango from './mango.gif'

export function Fruit(){
    const [add,setAdd]=useState(0);
    const [plus,setPlus]=useState(0);
    return(
        <>
        <Menu/>
        <div className="container-fluid bg-warning p-5">
            <div className="">
                <div className="bg-light text-center p-5">
                    <h1>Sakthi ate <span>{add}</span> Bananas and <span>{plus}</span> Mangoes</h1>
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={banana} className="col-lg-6"/>
                            <div className="d-flex flex-row justify-content-around">
                                <button className="bg-info text-light bon" onClick={()=>{setAdd(add+1)}}>Bananas</button>
                                <button className="bg-info text-light bon" onClick={()=>{setAdd(add*0)}}>Reset</button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={mango} className="col-lg-6"/>
                            <div className="d-flex flex-row justify-content-around">
                                <button className="bg-info text-light bon" onClick={()=>{setPlus(plus+1)}}>Mangoes</button>
                                <button className="bg-info text-light bon" onClick={()=>{setPlus(plus*0)}}>Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}