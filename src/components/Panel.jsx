import React from 'react'
import "./panel.css"



function Panel () {





    return (
        <div className="panel">
            <div className="panel__avatar">
                Avatar
            </div>
            <div className="panel__score">
                9
            </div>
            <div className="panel__menu">
                <div className="panel__menu--link">
                    Link 1
                </div>
                <div className="panel__menu--link">
                    Link 2
                </div>
            </div>
        </div>
    )
}

export default Panel