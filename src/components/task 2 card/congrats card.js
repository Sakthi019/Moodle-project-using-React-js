import React from "react";
import { Menu } from "../menu bar/menu";
import './congrats card.css';
import 'bootstrap/dist/css/bootstrap.css';
import profile from './profile.png';
import watch from './watch.png';

export function Card(){
    return(
        <>
        <Menu/>  
        <div className="container-fluid bg-img">
            <h1 className="text-center">Congratulations</h1>
            <div className="row p-5">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 bg-cl text-center p-4">
                    <img src={profile}/>
                    <h4>Sakthi Kumar M</h4>
                    <h6>Sakthi Institute of Computer Education and Technology, Coimbatore.</h6>
                    <img src={watch}/>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
        </>
    );
}