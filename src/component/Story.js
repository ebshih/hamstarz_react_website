import React from 'react';
import './Style.css'
import { story } from "../data/data"


function Story({ myref }) {
    return (
        <div ref={myref} className={"story-container"}>
            <h1 className={"about-title"}>Story</h1>
            <div className="split-container">
                <div className={"story-right-container"}>
                    <p className={"about-discr"}>{story.Story_Description}</p>
                    <p className={"about-discr"}>{story.StoryDescription1}</p>
                </div>
                <div className={"left-container"}>
                    <img className={"story-img"} src={"http://cohenwoodworking.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg"} />
                </div>
            </div>
        </div>
    );
}

export default Story;