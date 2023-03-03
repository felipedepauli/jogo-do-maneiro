import React from 'react'
import { Link } from 'react-router-dom';
import "../pages/positives_list.css"
import "../styles/colors.css"
import "../styles/common.css"



const Positive = ({id, pos, colors, actions, groups, labels, setModal, setLabel, setGroup, hidden}) => {

    return (
        <div className={`positives_list__table--row ${actions[pos.action]}${(hidden[0] == -1 || hidden[0] == pos.label)? "" : " hidden" }}`}>
            <div className="actions_unit" onClick={()=> setModal("open", id) }>
                {/* <Link
                    to  = "/" 
                >
                    {pos.text}
                </Link> */}
                {pos.title}
            </div>
            <div className="groups">{
                pos.groups.map((group, key) => (
                    <div onClick={()=>setGroup(group)} className={`groups__unit colors ${colors[group]}`} key={key}>{groups[group]}</div>
                )
            )}</div>
            <div className="labels__groups">{
                pos.label.map((label, key) => (
                    <div onClick={()=>setLabel(label)} className={`labels__unit colors ${colors[label]}`} key={key}>{labels[label]}</div>
                )
            )}</div>
        </div>
    )
}

export default Positive
