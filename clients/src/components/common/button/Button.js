import React from 'react'

function Button(props) {
    const type = props.type || 'button'
    return (
        <button type={type} onClick={props.onClick}>
            {props.label}
        </button>
    )
}

export default Button