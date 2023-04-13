import React from "react";
import { Menu } from "../menu bar/menu";
import './social btn.css';
import 'bootstrap/dist/css/bootstrap.css';

export function Button(){
    return(
        <>
        <Menu/>
        <div className="row">
            <div className="col-lg-2"></div>
            <div className="text-center p-2 cen bg-im col-lg-8">
                <div>
                    <h1 className="text-light text-center sze">Social Buttons</h1>
                    <div className="d-flex flex-row justify-content-around">
                        <button className="btn-warning but cen">Like</button>
                        <button className="btn-light but">Comment</button>
                        <button className="btn-primary but">Share</button>
                    </div>
                </div>
            </div>  
            <div className="col-lg-2"></div>
        </div>
        </>
    );
}