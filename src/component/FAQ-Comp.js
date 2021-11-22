import React,{useState} from 'react';
import './Style.css'

function FAQ_Comp ({val}) {
    const[show, setShow] = useState(false)
    return (
                <>
                <div onClick={()=>setShow(!show)} className={"faq-box"}>
                <h2 className={"faq-question"} onClick={()=>setShow(!show)}>{val.question}</h2>
                <h2 onClick={()=>setShow(!show)}>{show?"-" : "+"}</h2>
                </div>
                {show&&
                <div className={"answer-box"}>
                <h2 className={"faq-answer"}>{val.answer}</h2>
                </div>
                }
                </>
                )
}

export default FAQ_Comp;