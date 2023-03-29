import React from "react";
import { Link } from "react-router-dom";
import './menu.css';
import 'bootstrap/dist/css/bootstrap.css';
 

export function Menu(){
    return( 
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div className="text-danger">
            <h6>Welcome to My Work</h6>
            <h6>Sakthi Kumar M<span>&#128293;</span></h6>
        </div>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <Link to='/Hello'><li className="nav-link">Hello World!</li></Link>
                <Link to='/Card'><li className="nav-link">Congrats Card</li></Link>
                <Link to='/League'><li className="nav-link">Super Over League</li></Link>
                <Link to='/Button'><li className="nav-link">Social Buttons</li></Link>
                <Link to='/Application'><li className="nav-link">Application</li></Link>
                <Link to='/Login'><li className="nav-link">Login</li></Link>
                <Link to='/Tech'><li className="nav-link">Tech</li></Link>
                <Link to='/UseState'><li className="nav-link">Use State</li></Link>
                <Link to='/Fruit'><li className="nav-link">Fruits Count</li></Link>
                <Link to='/Feedback'><li className="nav-link">Feedback</li></Link>
            </ul>
        </div>
        </nav>
        </>
    );
}
