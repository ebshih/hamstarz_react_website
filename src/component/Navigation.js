import React, { useState } from 'react';
import './Style.css'

import { home_social } from "../data/data";

import menu from "../asset/menu.jpg";
import close from "../asset/close.png";
import logo from "../asset/logo.png";


function Navigation({ scrollTo }) {
  const [show, setShow] = useState(false)

  const ClickedMenu = (t) => {
    setShow(false)
    scrollTo(t)
  }

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='header-container'>
      <img onClick={() => ClickedMenu("h")} className='logo-img header-logo-img' src={logo}></img>
        

        <div className={"menu-container"}>
          
          <h2 onClick={() => ClickedMenu("s")} className={"menu-text"}>Story</h2>
          <h2 onClick={() => ClickedMenu("t")} className={"menu-text"}>Roadmap</h2>
          <h2 onClick={() => ClickedMenu("f")} className={"menu-text"}>FAQ</h2>
          <h2 onClick={() => ClickedMenu("c")} className={"menu-text"}>Team</h2>
          <div className='header-social-container'>
            {home_social.map((val) => {
                    return (
                        <img onClick={(e) => {
                            e.preventDefault();
                            window.open(val.link);
                        } } className={"header-social-img"} src={val.image} />
                    );
                })}
          </div>
        </div>

        
        <img onClick={() => setShow(true)} className={'menu-icon'} src={menu}></img>
      </div>
      {show ?
        <div className={'mobile-menu'}>
          
          <h2 onClick={() => ClickedMenu("s")} className={"menu-text"}>Story</h2>
          <h2 onClick={() => ClickedMenu("t")} className={"menu-text"}>Roadmap</h2>
          <h2 onClick={() => ClickedMenu("f")} className={"menu-text"}>FAQ</h2>
          <h2 onClick={() => ClickedMenu("c")} className={"menu-text"}>Team</h2>
          <img onClick={() => setShow(false)} className={'close-icon'} src={close} ></img>
          <div className=' menu-text header-social-container'>
            {home_social.map((val) => {
                    return (
                        <img onClick={(e) => {
                            e.preventDefault();
                            window.open(val.link);
                        } } className={"header-social-img"} src={val.image} />
                    );
                })}
          </div>
        </div>
        : null}
    </nav>
  );
}

export default Navigation;