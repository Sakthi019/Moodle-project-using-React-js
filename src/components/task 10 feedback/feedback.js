import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './feedback.css';
import { Menu } from "../menu bar/menu";
import { Link } from "react-router-dom";

export function Feedback(){
    return(
        <>
        <Menu/>
        <div className="container-fluid pink">
            <div className="row p-3">
            <div className="col-lg-3"></div>
            <div className="text-center col-lg-6 bg-light my-5 p-5 bdr">
                <div className="">
                    <h4>How satisfied are you customer support performance.</h4>
                </div>
                <div className="d-flex flex-row justify-content-around py-5">
                    <Link to='/Result' className="badge"><h1 className="display-3">&#128549;</h1><h1 className="text-warning">Sad</h1></Link>
                    <Link to='/Result' className="badge"><h1 className="display-3">&#128529;</h1><h1 className="text-warning">None</h1></Link>
                    <Link to='/Result' className="badge"><h1 className="display-3">&#129321;</h1><h1 className="text-warning">Happy</h1></Link>
                </div>
            </div>
            <div className="col-lg-3"></div> 
            </div>
        </div>
        </>
    );
}