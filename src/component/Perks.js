import React from 'react';
import './Style.css'
import Perk_Cards from "../component/Perk-Card";
import { perks } from "../data/data";

const About_Image = "https://freepngimg.com/thumb/cute/29990-5-cute-cartoon-transparent.png"
const About_Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

function Perks ({myref}) {
    return (
       <div ref={myref} className={"perk-container"}>
           <h1 className={"about-title"}>Perks</h1>
           <div className={"perk-card-container"}>
           {
               perks.map((val)=>{
                   return <Perk_Cards val={val}/>
               })
           }
           </div>
       </div>
    );
}

export default Perks