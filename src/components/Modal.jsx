import React from 'react'
import "./modal.css"
import "../styles/colors.css"



const Modal = (props) => {
    const close = () => {
        props.setModal("hidden", 0)
    }
    return (
        <div className={`modal ${props.visibility}`}>
            <div className="modal_box__close" onClick={close}>
            </div>
            <div className={`modal_box colors ${props.background}`}>
                <div className="modal_box__title">
                    <h1>{props.pos.title}</h1>
                </div>
                <div className="modal_box__subtitle">Por quê?</div>
                <div className='modal_box__reasons'>
                {
                    (props.pos.reasons !== undefined) ?
                        props.pos.reasons.map((reason, key) => (
                            <div className="modal_box__reasons--unit" key={key}>
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