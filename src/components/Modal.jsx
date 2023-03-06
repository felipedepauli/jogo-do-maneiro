import React, { useState, useEffect } from 'react'
import "./modal.css"
import "../styles/colors.css"



function Modal(props) {
    const close = () => {
        props.setModal("hidden", 0)
    }
    return (
        <div className={`modal ${props.visibility}`}>
            <div className="modal_box__close" onClick={close}>
            </div>
            <div className="modal_box__wrapper">
                <div className={`modal_box colors ${props.background}`}>
                    <div className="modal_box__title">
                        <h1>{props.positive.title}</h1>
                    </div>
                    <div className="modal_box__tags">
                        <div className="modal_box__tags--tag">Entendendo o porquê</div>
                        <div className="modal_box__tags--tag">Acompanhamento</div>
                    </div>
                    <div className='modal_box__reasons'>
                    {
                        (props.positive.reasons !== undefined) ?
                            props.positive.reasons.map((reason, key) => 
                            {
                                return (
                                    <Doc
                                        key             = {key}
                                        id              = {key}
                                        reason          = {reason}
                                        handleAgreement = {{
                                            idReason        : parseInt(props.positive.id),
                                            agreement       : reason.agreement,
                                            toggleAgreement : props.toggleAgreement
                                        }}
                                        />
                                )
                            })
                        :
                            ""
                    }
                    </div>
                    <div className="modal_box__new">
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal

const Doc = ({id, reason, handleAgreement}) => {
    return (
        <div className={`modal_box__reasons--row modal_box__reasons--row--${handleAgreement.agreement}`}>
            <div className="modal_box__reasons--row--unit">
                &#8212; {reason.text}
            </div>
            <div className="modal_box__reasons--row-agreement">
                <input type="checkbox" name="my-checkbox" checked={handleAgreement.agreement === "accepted"} onChange={() => handleAgreement.toggleAgreement(handleAgreement.idReason, id)}/>
            </div>
        </div>
    )
}