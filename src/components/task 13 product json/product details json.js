import React,{useEffect,useState} from "react";
import "./product json.css";
import "bootstrap/dist/css/bootstrap.css";
import { Menu } from "../menu bar/menu";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export function Productdetail(){
    const[Product,setProduct]=useState([]);
    const{id}=useParams()
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+id) 
        .then(data=>data.json())
        .then(da=>setProduct(da))
    })

    return(
        <>
        <Menu/>
        
        <div className="container-fluid">
            <div className="row">
            <div className="col-lg-6">
                <img src={Product.image} className="col-lg-12 p-5"/>
            </div>
            <div className="col-lg-6 p-5">
                <h3>{Product.title}</h3>
                <h6>{Product.description}</h6>
                <h6>$ {Product.price}</h6>
                <h6>{Product.category}</h6>
                <h6>{Product.rating.rate}<FontAwesomeIcon icon={faStar} className="text-warning"/></h6>
            </div>
        </div>
        </div>
        </>
    );
}