import React from 'react'
import Positive from '../components/Positive.jsx'
import "./positives_list.css"
import "../styles/common.css"
import Modal from "../components/Modal.jsx"

// import { Route, Switch } from 'react-router-dom';

const groups = [
    "Boa Convivência",  // 00
    "Adultinho daora",  // 01
    "Vida sem Apuros",  // 02
    "Diversão sem Fim"  // 03
]
const labels = [
    "Soninho",          // 00
    "Cheirosim",        // 01
    "Gamer",            // 02
    "Leitura Caótica",  // 03
    "Dr Heitor",        // 04
    "Qualquer hora",    // 05
    "Gatins",           // 06
    "Soninho",          // 07
    "Artista",          // 08
    "Rei das Finanças", // 09
    "Teus BOs",         // 10
    "4a Parede",        // 11
    "Comilança",        // 12
    "Galerinha Real",   // 13
    "Atleta"            // 14
]
const colors = [
    "red",          // 00
    "green",        // 01
    "yellow",       // 02
    "blue_green",   // 03
    "blue",         // 04
    "orange",       // 05
    "pink",         // 06
    "cyan",         // 07
    "brown",        // 08
    "purple",       // 09
    "gray",         // 10
    "black",        // 11
    "red_orange",   // 12
    "red_purple",   // 13
    "green_yellow", // 14
    
]

const actions = [
    "positive",
    "negative"
]

class PositivesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: "hidden",
            positive: 0,
            labels: -1,
            groups: -1
        }
    }
    setModal = (visibility_, positive_) => {
        this.setState({
            visibility: visibility_,
            positive: positive_
        });
        console.log(positive_)
    }
    setLabel = (labels_) => {
        if (this.state.labels !== -1) {
            this.setState({
                labels: -1
            })
        } else {
            this.setState({
                labels: labels_
            })
        }
        console.log("Label = ", labels_)
    }
    render() {
        return (
            <div className="positives_list">
                <h2>Lista de Positivos</h2>
                <div className="positives_list__table">
                    <div className="positives_list__table--header">
                        <div>Positivo</div>
                        <div>Grupo</div>
                        <div>Momentos</div>
                    </div>
                    {this.props.positives.map((pos, key) => (
                        <Positive
                            key      = {key}
                            id       = {key}
                            pos      = {pos}
                            colors   = {colors}
                            actions  = {actions}
                            groups   = {groups}
                            labels   = {labels}
                            hidden   = {[this.state.labels]}
                            setModal = {this.setModal}
                            setLabel = {this.setLabel}
                            />
                    ))}
                </div>
                <Modal
                    visibility  = {this.state.visibility}
                    setModal    = {this.setModal} 
                    pos         = {this.props.positives[this.state.positive]}
                    background  = {colors[this.props.positives[this.state.positive].groups]}
                    />
            </div>
        )
    }
}
export default PositivesList
