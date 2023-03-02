import React from 'react'

const Link = (props) => {



    return (
        <div>
            <a href={`http://${props.url}`}>{props.text}</a>
        </div>
    )
}

const Positive = (props) => {
    return (
        <div>
            {props.inner}
        </div>
    )
}

export {
    Link
}

export default Positive
