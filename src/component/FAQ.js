import React, { useState } from 'react';
import './Style.css'
import FAQ_Comp from "../component/FAQ-Comp";
import { faq } from "../data/data";

function FAQ({ myref }) {
    return (
        <div ref={myref} className={"faq-container bottom-border"}>
            <h1 className={"faq-title"}>FAQ</h1>
            {
                faq.map((val) => {
                    return <FAQ_Comp val={val} />
                })
            }
        </div>
    );
}

export default FAQ;