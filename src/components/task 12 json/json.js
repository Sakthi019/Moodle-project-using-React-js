import React,{useEffect,useState} from "react";
import "./json.css";
import "bootstrap/dist/css/bootstrap.css";
import { Menu } from "../menu bar/menu";

export function Json(){
    const[bike,setBike]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/bikedata.json') 
        .then(data=>data.json())
        .then(da=>setBike(da))
    })

    return( 
        <>
        <Menu/>
        
        <div className="container-fluid">
            <h1 className="display-1 text-danger text-center">BRANDED BIKES.....</h1>
            <div className="row col-lg-12 justify-content-between">
        {
            bike.map((value,index)=>
            <>
            <div className="card col-lg-4 text-center">
                    <h1>{value.brand}</h1>
                    <div className="card-body">
                        <img src={value.image} className="card-img-top"/>
                        <h2>{value.name}</h2>
                        <h3>{value.price}</h3>
                        <button>View More</button>
                    </div>
                </div>
            </>
            )
        }
        </div>
        </div>
        </>
    );
}