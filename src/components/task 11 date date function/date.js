import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './date.css';
import { Menu } from "../menu bar/menu";

export function Datefunction(){
    function cal() 
    {
        var coDate = document.getElementById("coursDate").value;
        var di = document.getElementById("divid");
        var date = new Date(coDate);
        date.setDate(date.getDate()+90);
        var output = date.getDate() +"/"+ (date.getMonth()+1) +"/"+ date.getFullYear();
        di.innerText = "End Date : " + output;
    }

    return(
        <>
        <Menu/>
        <div className="cen p-5 bg-date">
            <div>
           <h2 className="text-success">Select Course Starting Date :</h2>
            <input type="date" id="coursDate" className="inpt"/>
            <button onClick={cal} className="bt">Calculate</button>
           <div id="divid" className="display-4 font-weight-bold text-danger">

           </div>
           </div>
        </div>
        </>
    )
}