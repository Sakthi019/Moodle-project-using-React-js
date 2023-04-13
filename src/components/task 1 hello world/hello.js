import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "../menu bar/menu";
import { faMasksTheater } from "@fortawesome/free-solid-svg-icons";
import { faSpider } from "@fortawesome/free-solid-svg-icons"
import './hello.css';

export function Hello(){
    return(
        <>
        <Menu/>
        <div>
        <marquee direction="down">
            <div className="cen mt-5">
                <h1>Hello World!<span className="text-danger"><FontAwesomeIcon icon={faSpider} /></span></h1>
            </div>
        </marquee>
        </div>
        <div>
        <marquee direction="up">
            <div className="cen mt-5 d-flex flex-row justify-content-center">
                <h1>Sakthi Kumar M<span className="text-danger"><FontAwesomeIcon icon={faMasksTheater} /></span></h1>
            </div>
        </marquee>
        </div>
        </>
    );
}