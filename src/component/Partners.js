import React from 'react';
import './Style.css'
import nemesis from "../asset/nemesis.png";
import netvrk from "../asset/netvrk.png";
import netvrkhoriz from "../asset/netvrkhoriz.png";
import nemscoin from "../asset/nemscoin.png";

function Partners({ myref }) {
    return (
        <div ref={myref} className={"story-container font-options bottom-border"}>
            <h1 className={"about-title"}>Partners</h1>
            <div className={"partners-container"}>
                <div className={"partner-card"}>
                    <div ref={myref} className={"partner-logo-wrapper partner-left"} style={{ backgroundImage: `url(${netvrkhoriz})` }}></div>
                    </div>
                <div className={"partner-card"}>
                    <div ref={myref} className={"partner-logo-wrapper partner-right"} style={{ backgroundImage: `url(${nemesis})` }}></div>
                    </div>
            </div>
        </div>
    );
}

export default Partners;