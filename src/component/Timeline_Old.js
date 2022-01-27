import React from 'react';
import './Style.css'
import { ReactComponent as WorkIcon } from "../asset/work.svg";
import { ReactComponent as SchoolIcon } from "../asset/school.svg";
import crownIcon from "../asset/insta-white.png";

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
        <div ref={myref} className={"story-container font-options bottom-border"}>
            <h1 className={"roadmap-timeline about-title"}>Roadmap</h1>
            <div>
                <VerticalTimeline className={"roadmap-timeline"}>
                    {timelineElements.map((element) => {
                    let isWorkIcon = element.icon === "work";

                    return (
                        <VerticalTimelineElement
                        key={element.key}
                        date={element.date}
                        dateClassName="date"
                        iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                        
                        >
                        <h3 className="vertical-timeline-element-title">
                            {element.title}
                        </h3>
                        <p id="description">{element.description}</p>
                        </VerticalTimelineElement>
                    );
                    })}
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Timeline;