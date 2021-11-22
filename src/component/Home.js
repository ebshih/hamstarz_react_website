import React, { useEffect, useState, useRef } from "react";
import './Style.css'
import { home_social } from "../data/data";

function Home({ myref }) {

    return (
        <div ref={myref} className={"home-container"}>
            <div className={"overlay"}>
                <div className="split-container">
                    <div className={"left-container"}>
                        <h2 className={"home-title"}>Mint your NFT</h2>
                        {/* <h3 className={"home-discr"}>{home.Home_Description}</h3> */}
                        <h3 className={"home-discr-num"}>0 / 1000</h3>
                        <h3 className={"home-discr"}>0.1 Eth</h3>

                        <h2 className={"home-discr"}>Connect to the network</h2>
                        <div className={"home-button"}>
                            <h3>Connect Wallet</h3>
                        </div>

                        <div className={"home-social-container"}>
                            {
                                home_social.map((val) => {
                                    return (
                                        <img onClick={(e) => {
                                            e.preventDefault();
                                            window.open(val.link);
                                        }} className={"foot-social-img"} src={val.image} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={"right-container"}>
                        <img className={"home-img"} src={"http://cohenwoodworking.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg"} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;