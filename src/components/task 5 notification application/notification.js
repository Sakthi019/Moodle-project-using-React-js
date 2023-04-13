import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './notification.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Menu } from "../menu bar/menu";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons"

export function Application(){
    return(
        <>
        <Menu/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div>
                        <h1 className="text-center">Notification</h1>
                    </div>
                    <div>
                        <div className="bg-primary p-3 m-3 text-light"><FontAwesomeIcon icon={faCircleCheck}/>Information Message</div>
                        <div className="bg-success p-3 m-3 text-light"><FontAwesomeIcon icon={faCircleCheck}/>Success Message</div>
                        <div className="bg-warning p-3 m-3 text-light"><FontAwesomeIcon icon={faBell}/>Warning Message</div>
                        <div className="bg-danger p-3 m-3 text-light"><FontAwesomeIcon icon={faCircleInfo}/>Error Message</div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
        </>
    );
}