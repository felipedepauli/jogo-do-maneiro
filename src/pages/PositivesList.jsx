import React from 'react'
import Positive, { Link } from '../components/Positive.jsx'
import "./positives_list.css"

const labels = [
    "Soninho",
    "Cheirosim",
    "Gamer"
]
const groups = [
    "Boa Convivência",
    "Adultinho daora",
    "Vida sem Apuros",
    "Diversão sem Fim"
]
const colors = [
    "red",
    "green",
    "yellow",
    "blue"
]

class Module extends React.Component {
    getLabel(){
        return {

        }
    }
    render() {
        return (
            <div>
                <h2>Lista de Positivos</h2>
                <div className="positives_list__table">
                    <div className="positives_list__table--header">
                        <div>Positivo</div>
                        <div>Grupo</div>
                        <div>Labels</div>
                    </div>
                    {this.props.positives.map((pos, key) => (
                        <div key={key} className="positives_list__table--row">
                            <Link
                                url={pos.url} 
                                text={pos.text}
                                />
                            <div className="groups">{
                                pos.groups.map((label, key) => (
                                    <div className={`groups__unit colors ${colors[label]}`} key={key}>{groups[label]}</div>
                                )
                            )}</div>
                            <div className="labels__groups">{
                                pos.label.map((label, key) => (
                                    <div className={`labels__unit colors ${colors[label]}`} key={key}>{labels[label]}</div>
                                )
                            )}</div>
                        </div>
                    ))}
                </div>
                <div>
                    <Positive
                        inner="Texto"/>
                </div>
            </div>
        )
    }
}


export default Module



