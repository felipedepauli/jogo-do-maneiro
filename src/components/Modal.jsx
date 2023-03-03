import React, { useState } from 'react'
import "./Modal.css"
import "../styles/colors.css"



const Modal = (props) => {
    const close = () => {
        props.setModal("hidden", 0)
    }
    return (
        <div className={`modular ${props.visibility}`}>
            <div className="modular_box__close" onClick={close}>
            </div>
            <div className="title_1">
            <h1>{props.pos.title}</h1></div>
            <div className={`modular_box colors ${props.background}`}>
                <h2>Por quê?</h2>
                <div className='modular_box__reasons'>
                {
                    (props.pos.reasons != undefined) ?
                        props.pos.reasons.map((reason, key) => (
                            <div className="modular_box__reasons--unit" key={key}>
                                &#8212; {reason}
                            </div>
                        )):
                        ""
                }
                </div>
            </div>
        </div>
    )
}

export default Modal