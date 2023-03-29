import React from "react";
import { Menu } from "../menu bar/menu";
import './login design.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import laptop from "./laptop.png";

export function Login(){
    return(
        <>
        <Menu/>
            <div className="container-fluid bg-cor">
                <div className="p-4">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="bg-light bg col-lg-8 text-center">
                            <div className="row my-5">
                                <div className="col-lg-6 cen">
                                    <img src={laptop} width="300px"/>
                                </div>
                                <div className="col-lg-6 cen">
                                    <h1 className="p-3">Member Login</h1>
                                    <div className="my-2 row"><span className="inpt"><FontAwesomeIcon icon={faEnvelope} /><input type="text" id="user" name="user" className="inp" placeholder="Email"/></span></div>
                                    <div className="my-2 row"><span className="inpt"><FontAwesomeIcon icon={faLock} /><input type="password" id="pass" name="pass" className="inp" placeholder="****"/></span></div>
                                    <button className="my-2  bt">Login</button>
                                    <h6 className="my-4">Forget <span className="gclr">Username / Password?</span></h6>
                                    <h6 className="gclr">Create your account<FontAwesomeIcon icon={faArrowRight} /></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </div>
        </>
    );
}