import React from 'react';
import './Style.css'
import { story } from "../data/data"
import welcomeHamstar from "../asset/welcome.png";
import nemesis from "../asset/nemesis.png";
import netvrk from "../asset/netvrk.png";
import netvrkhoriz from "../asset/netvrkhoriz.png";
import nemscoin from "../asset/nemscoin.png";


function Story({ myref }) {
    return (
        <div ref={myref} className={"story-container font-options bottom-border"}>
            <div className={"story-parent-container"}>
                <div className={"story-left-spacer"}/>
                <div className={"story-left-container"}>
                    <h1 className={"about-title story-title"}>Story</h1>

                    <div className={"story-contents-container"}>
                        <p className={"description"}>{story.Story_Description1}</p>
                    </div>
                </div>
                
                <div className={"storyimage-1-of-2-container"}>
                    <img className={"story-img"} src={welcomeHamstar} />
                </div>
            </div>

            <div className={"spacerLarge"}/>
            <div className={"spacerSmall"}/>
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

export default Story;