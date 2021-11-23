import React from 'react';
import './Style.css'
import { about } from "../data/data";

function About({ myref }) {
    return (
        <div ref={myref} className={"about-container bottom-border"}>
            <h1 className={"about-title"}>About us</h1>
            <div className="split-container">
                <div className={"image-1-of-2-container"}>
                    <img className={"about-img"} src={"https://reactnativeexample.com/content/images/2019/09/direction_change.gif"} />
                </div>
                <div className={"text-1-of-2-container"}>
                    <h3 className={"about-discr"}>{about.About_Description}</h3>
                    <h3 className={"about-discr"}>{about.About_Description2}</h3>
                </div>
            </div>
        </div>
    );
}

export default About;