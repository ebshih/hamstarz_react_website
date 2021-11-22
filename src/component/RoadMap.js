import React from 'react';
import './Style.css'
import { Chrono } from "react-chrono";

function RoadMap({ myref }) {
    return (
        <div ref={myref} className={"road-container"}>
            <h1 className={"about-title"}>Road Map</h1>
            <div className={"road-map-container"}>
                <Chrono
                    mode={"VERTICAL"}
                    cardWidth={"800"}
                    cardHeight={"100"}
                    useReadMore={false}
                    hideControls
                    theme={{
                        primary: "red",
                        secondary: "black",
                        cardBgColor: "lightgreen",
                        cardForeColor: "black",
                        titleColor: "black",
                        textColor: "red",
                    }}
                >
                    <div className={"road-card"}>
                        <h1 className={"road-card-title"}>Category 1</h1>
                        <p className={"road-card-discr"}>Lorem ipsum dolor sit amet</p>
                        <p className={"road-card-discr"}>Lorem ipsum dolor sit amet</p>
                        <p className={"road-card-discr"}>Lorem ipsum dolor sit amet</p>
                        <p className={"road-card-discr"}>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <h1 className={"road-card-title"}>Category 2</h1>
                        <p className={"road-card-discr"}>Lorem ipsum dolor sit amet</p>
                        <p className={"road-card-discr"}>Lorem ipsum dolor sit amet</p>
                        <p className={"road-card-discr"}>Lorem ipsum dolor sit amet</p>
                        <p className={"road-card-discr"}>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <h1 className={"road-card-title"}>Category 3</h1>
                        <p className={"road-card-discr"}>Lorem ipsum dolor sit amet</p>
                        <p className={"road-card-discr"}>Lorem ipsum dolor sit amet</p>
                        <p className={"road-card-discr"}>Lorem ipsum dolor sit amet</p>
                        <p className={"road-card-discr"}>Lorem ipsum dolor sit amet</p>
                    </div>

                </Chrono>
            </div>
        </div>
    );
}

export default RoadMap;