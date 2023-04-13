import React,{useEffect,useState} from "react";
import "./product json.css";
import "bootstrap/dist/css/bootstrap.css";
import { Menu } from "../menu bar/menu";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export function Product(){
    const[Product,setProduct]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products') 
        .then(data=>data.json())
        .then(da=>setProduct(da))
    })

    return(
        <>
        <Menu/>
        
        <div className="container-fluid">
            <div className="row col-lg-12 justify-content-between">
        {
            Product.map((value,index)=>
            <>
            <div className="card col-lg-3 m-2">
                <div className="card-body bg-info cent">
                    <img src={value.image} className="col-lg-12"/>
                    <h3>{value.id}.{value.title}</h3>
                    <h6>$ {value.price}</h6>
                    <Link to={`/Productdetails/${value.id}`}><button className="btn text-light bg-primary">View More</button></Link>
                    <StarRatings
                    rating={value.rating.rate}
                    starDimension="30px"
                    starRatedColor="gold"
                    starSpacing="10px"/>
                    <h6>count: {value.rating.count}</h6>
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