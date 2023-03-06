import React, {useState, useEffect} from 'react'
import Positive from '../components/Positive.jsx'
import "./positives_list.css"
import "../styles/common.css"
import Modal from "../components/Modal.jsx"

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

function PositivesList(props) {
    const [loading, setLoading] = useState(true)
    const [positives, setPositives] = useState([])
    const [modal, setModal] =  useState({
            visibility  : "hidden",
            positive    :  0,
            labels      : -1,
            groups      : -1
    })
    const fetchBd = () => {
        console.log("wowowow")
        fetch('http://localhost:3001/read')
            .then(response => response.json())
            .then(data => {
                setPositives([
                    ...data
                ])
                setLoading(false)
                console.log(data) 
            })
            .catch(error => {
                console.error(error);
                setLoading(false)
            });
    }
    const setModalHandler = (visibility_, positive_) => {
        setModal({
            ...modal,
            visibility  : visibility_,
            positive    : parseInt(positive_)
        });
        if (visibility_ == "hidden") {
            console.log("Modal closed")
        } else {
            console.log("Modal opened with positive = ", positive_)
        }
    }
    const toggleAgreement = (id, reasonId) => {
        const updatedPositives = positives.map(positive => {
            if (parseInt(positive.id) === id) {
                positive.reasons[reasonId].agreement = (positive.reasons[reasonId].agreement == "accepted") ? "denied" :  "accepted"
                console.log(positive)
            }
            return positive
        })
       
        setPositives([
            ...updatedPositives
        ])

    }
    const setLabelHandler = (labels_) => {
        if (parseInt(modal.labels) !== -1) {
            console.log("vamos filtrar")
            setModal({
                ...modal,
                labels: -1
            })
        } else {
            console.log("vamos liberar")
            setModal({
                ...modal,
                labels: labels_
            })
        }
        console.log("Label = ", labels_)
    }
    useEffect(() => {
        fetchBd()
    }, [])

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="positives_list">
            <h2>Lista de Positivos</h2>
            <div className="positives_list__table">
                <div className="positives_list__table--header">
                    <div>Positivo</div>
                    <div>Grupo</div>
                    <div>Momentos</div>
                    <div>Status</div>
                    <div>Score</div>
                </div>
                {positives.map((positive, key) => (
                    <Positive
                        key      = {key}
                        positive = {positive}
                        colors   = {colors}
                        actions  = {actions}
                        groups   = {groups}
                        labels   = {labels}
                        hidden   = {modal.labels}
                        setModal = {setModalHandler}
                        setLabel = {setLabelHandler}
                        />
                ))}

            </div>
            <Modal
                visibility  = {modal.visibility}
                setModal    = {setModalHandler} 
                positive    = {positives[modal.positive]}
                background  = {colors[positives[modal.positive].groups]}
                toggleAgreement = {toggleAgreement}
                />
        </div>
    )
}
export default PositivesList
