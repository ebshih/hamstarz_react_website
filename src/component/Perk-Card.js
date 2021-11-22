import React from "react";

function Perk_Card({ val }) {
    return (
        <div className={"card-container"}>
            <h1 className={"card-title"}>{val.title}</h1>
            <div className={"card-list-container"}>
                {
                    val.benifits.map((val) => {
                        return (
                            <ul className={"card-list"}>{val}</ul>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Perk_Card