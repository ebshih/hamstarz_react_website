import React from "react";

function Team_Card({val}){
    return(
        <div className={"team-card"}>
            <img className={"team-img"} src={val.image}/>
            <h1 className={"team-name"}>{val.name}</h1>
            <h2 className={"team-desc"}>{val.desc}</h2>
        </div>
    )
}

export default Team_Card