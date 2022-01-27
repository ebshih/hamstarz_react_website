import React, { Component } from 'react';
import { social } from "../data/data";

export default function Footer({ myref }) {
  return (
    <div ref={myref} className={"footer-container"}>
      <div className={"foot-copyright"}>© 2022 hammy frens</div>
      <div className={"foot-social-container"}>

        {
          social.map((val) => {
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
  );
}
