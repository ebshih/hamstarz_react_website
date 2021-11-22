import React from 'react';
import './Style.css'
import { about } from "../data/data";

function About({ myref }) {
    return (
        <div ref={myref} className={"about-container"}>
            <h1 className={"about-title"}>About us</h1>
            <div className="split-container">
                <div className={"right-container"}>
                    <img className={"about-img"} src={"https://reactnativeexample.com/content/images/2019/09/direction_change.gif"} />
                </div>
                <div className={"left-container"}>
                    <h3 className={"about-discr"}>{about.About_Description}</h3>
                    <h3 className={"about-discr"}>{about.About_Description2}</h3>
                </div>
            </div>
        </div>
    );
}

export default About;