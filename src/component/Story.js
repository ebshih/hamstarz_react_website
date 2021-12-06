import React from 'react';
import './Style.css'
import { story } from "../data/data"
import welcomeHamstar from "../asset/welcome.png";


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
        </div>
    );
}

export default Story;