import React, { useState } from 'react';
import './Style.css'
import menu from "../asset/menu.jpg";
import close from "../asset/close.png";

function Navigation({ scrollTo }) {
  const [show, setShow] = useState(false)

  const ClickedMenu = (t) => {
    setShow(false)
    scrollTo(t)
  }

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <img onClick={() => ClickedMenu("h")} className='logo-img' src={"https://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-HomeDepot-White-Logo-PNG-Transparent.png"}></img>
        <div className={"menu-container"}>
          <h2 onClick={() => ClickedMenu("h")} className={"menu-text"}>Home</h2>
          <h2 onClick={() => ClickedMenu("a")} className={"menu-text"}>About</h2>
          <h2 onClick={() => ClickedMenu("s")} className={"menu-text"}>Story</h2>
          <h2 onClick={() => ClickedMenu("p")} className={"menu-text"}>Perks</h2>
          <h2 onClick={() => ClickedMenu("r")} className={"menu-text"}>Roadmap</h2>
          <h2 onClick={() => ClickedMenu("f")} className={"menu-text"}>FAQ</h2>
          <h2 onClick={() => ClickedMenu("c")} className={"menu-text"}>Crew</h2>
        </div>
        <img onClick={() => setShow(true)} className={'menu-icon'} src={menu}></img>
      </div>
      {show ?
        <div className={'mobile-menu'}>
          <h2 onClick={() => ClickedMenu("h")} className={"menu-text"}>Home</h2>
          <h2 onClick={() => ClickedMenu("a")} className={"menu-text"}>About</h2>
          <h2 onClick={() => ClickedMenu("s")} className={"menu-text"}>Story</h2>
          <h2 onClick={() => ClickedMenu("p")} className={"menu-text"}>Perks</h2>
          <h2 onClick={() => ClickedMenu("r")} className={"menu-text"}>Roadmap</h2>
          <h2 onClick={() => ClickedMenu("f")} className={"menu-text"}>FAQ</h2>
          <h2 onClick={() => ClickedMenu("c")} className={"menu-text"}>Crew</h2>
          <img onClick={() => setShow(false)} className={'close-icon'} src={close} ></img>
        </div>
        : null}
    </nav>
  );
}

export default Navigation;