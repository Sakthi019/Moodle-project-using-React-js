import React from "react";
import "./technology.css";
import "bootstrap/dist/css/bootstrap.css";
import { Menu } from "../menu bar/menu";
import img1 from './scientist.png';
import img2 from './house.png';
import img3 from './eye.png';
import img4 from './robot.png';

export function Tech(){
    return(
        <>
        <Menu/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2"></div> 
                <div className="col-lg-8 text-center">
                    <h1>Learn 4.0 Technologies</h1>
                    <p>Get trained by alummini of iit's and top companies like Amazon, Microsoft, Intel, Novidia, Qualcomm, etc. Learn directly from professonals involved in Product Development.</p>
                    <div className="row justify-content-around">
                        <div className="box1 p-4 col-lg-5 bg-light m-1">
                            <h5 className="text-left">Data Scientist</h5>
                            <p className="text-justify">Data Scientist gather and analyze large sets of structured and unstructured data.</p>
                            <img src={img1} className="col-lg-4 float-right"/>
                        </div>
                        <div className="box2 p-4 col-lg-5 bg-light m-1">
                            <h5 className="text-left">IT Developer</h5>
                            <p className="text-justify">IT Developers are professionals who can develop, manage and moniter IT devicers.</p>
                            <img src={img2} className="col-lg-4 float-right"/>
                        </div>
                    </div>
                    <div className="row justify-content-around">
                    <div className="box3 p-4 col-lg-5 bg-light m-1">
                            <h5 className="text-left">VR Developer</h5>
                            <p className="text-justify">A VR developer creaters completely new digital envroimentals that people can see.</p>
                            <img src={img3} className="col-lg-4 float-right"/>
                        </div>
                        <div className="box4 p-4 col-lg-5 bg-light m-1">
                            <h5 className="text-left">ML Engineer</h5>
                            <p className="text-justify">Machine learning engineers feed data into models defined by data scientist.</p>
                            <img src={img4} className="col-lg-4 float-right"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
        </>
    );
}