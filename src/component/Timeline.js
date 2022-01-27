import React from 'react';
import './Style.css'
import { ReactComponent as WorkIcon } from "../asset/work.svg";
import { ReactComponent as SchoolIcon } from "../asset/school.svg";
import crownIcon from "../asset/insta-white.png";
import banner from "../asset/banner_transparent.png";
import bannerSmall from "../asset/banner_transparent_45px.png";
import bannerMedium from "../asset/banner_transparent_55px.png";
import parkConstruction from "../asset/parkconstruction.png";
import bannerLong from "../asset/banner_long.png";

import timelineElements from "./TimelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Timeline({ myref }) {
    let workIconStyles = { background: "#f9c74f" };
    let schoolIconStyles = { background: "#f9c74f" };

    return (
        <div ref={myref} className={"story-container font-options"}>
            <h1 className={"roadmap-timeline about-title"}>Roadmap</h1>
            <div className={"roadmap-contents"}>
                Coming soon...
            </div>
            <img className={'park-construction'} src={parkConstruction}/>

            <div className={"animated-banner dark slideleft"} style={{backgroundImage: `url(${bannerMedium})`}}> </div>
            <div className={"animated-banner light slideright"} style={{backgroundImage: `url(${bannerMedium})`}}> </div>
        </div>
    );
}

export default Timeline;