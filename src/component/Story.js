import React from 'react';
import './Style.css'
import { story } from "../data/data"
import welcomeHamstar from "../asset/welcome.png";
import nemesis from "../asset/nemesis.png";
import netvrk from "../asset/netvrk.png";
import netvrkhoriz from "../asset/netvrkhoriz.png";
import nemscoin from "../asset/nemscoin.png";
import banner from "../asset/banner_transparent.png";
import bannerSmall from "../asset/banner_transparent_25px.png";
import bannerMedium from "../asset/banner_transparent_55px.png";


function Story({ myref }) {
    return (
        <div ref={myref} className={"story-container intro font-options"}>
            <div className={"story-parent-container"}>
                <div className={"story-left-container"}>
                    <h1 className={"about-title story-title"}>hi frens!</h1>

                    <div className={"story-contents-container"}>
                        <p className={"description desc-title"}>Want to be a kid all day, everyday?</p>
                        
                        <p className={"description desc-intro"}>Hammy frens is about unleashing your inner child and recreating your favorite childhood memories. 
                        Adult life is tough, so let's drown out the noise, escape our adult duties, and go on adventures together!
                        </p>
                        <p className={"description desc-ending"}>Join your hammy frens and play all day! </p>

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
                    <div ref={myref} className={"partner-logo-wrapper partner-left"} style={{ backgroundImage: `url(${nemesis})` }}></div>
                    </div>
                <div className={"partner-card"}>
                    <div ref={myref} className={"partner-logo-wrapper partner-right"} style={{ backgroundImage: `url(${netvrkhoriz})` }}></div>
                    </div>
            </div>
            <div className={"animated-banner purple"} style={{backgroundImage: `url(${bannerMedium})`}}> </div>
        </div>
    );
}

export default Story;