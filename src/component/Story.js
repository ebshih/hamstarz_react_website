import React from 'react';
import './Style.css'
import { story } from "../data/data"


function Story({ myref }) {
    return (
        <div ref={myref} className={"story-container bottom-border"}>
            <h1 className={"about-title"}>Backstory from our Creator</h1>
            
                <div className={"story-right-container"}>
                    <p className={"description"}>{story.Story_Description1}</p>
                    <div className={"spacerLarge"}/>
                    <p className={"description"}>{story.Story_Description2}</p>
                    <div className={"spacerLarge"}/>
                    <p className={"description"}>{story.Story_Description3}</p>
                </div>
                
        </div>
    );
}

export default Story;