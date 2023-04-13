import React from "react";
import { Menu } from "../menu bar/menu";
import './super over.css';
import 'bootstrap/dist/css/bootstrap.css';
import csk from './csk.png';
import rcb from './rcb.png';

export function League(){
    return(
        <>
        <Menu/>
        <div className="row p-5">
            <div className="col-lg-3"></div>
            <div className="text-center p-5 bg-clr col-lg-6">
                <div>
                    <h1 className="text-white">Super Over Leage</h1>
                </div>
                <div>
                    <img src={rcb} width="200px"/>
                    <img src={csk} width="200px"/>
                </div>
            </div>  
            <div className="col-lg-3"></div>
        </div>
        </>
    );
}