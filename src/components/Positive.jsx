import React, {useEffect} from 'react'
// import { Link } from 'react-router-dom';
import "../pages/positives_list.css"
import "../styles/colors.css"
import "../styles/common.css"



const Positive = (props) => {
    useEffect(() => {
        console.log("Action", props.hidden)
    }, [])
    return (
        // Complete register
        // [positives_list__table--row]
        // It will be shown only if hidden is not active in the row.
        // Enable or disable:
        //  - positive or negative
        //  - hidden or none
        <div className={`positives_list__table--row ${props.actions[props.positive.action]}${(parseInt(props.hidden) === -1 || parseInt(props.hidden) == props.positive.label)? "" : " hidden"}}`}>
            <div className="actions_unit" onClick={()=> props.setModal("open", props.positive.id) }>
                {props.positive.title}
            </div>
            <div className="groups">{
                props.positive.groups.map((group, key) => (
                    <div className={`groups__unit colors ${props.colors[group]}`} key={key}>{props.groups[group]}</div>
                )
            )}</div>
            <div className="labels__groups">{
                props.positive.label.map((label, key) => (
                    <div onClick={() => props.setLabel(label)} className={`labels__unit colors ${props.colors[label]}`} key={key}>{props.labels[label]}</div>
                )
            )}</div>
            <div className="status">
                Status
            </div>
            <div className="score">
                9
            </div>
        </div>
    )
}

export default Positive
