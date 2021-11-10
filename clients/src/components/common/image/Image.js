import React from 'react'
import './Image.scss'

function Image(props) {
    const alt = props.alt || 'Ảnh minh họa'
    const src = props.src || 'https://i.pinimg.com/564x/73/e7/ce/73e7ce2dd95c8e6af4a5e815b27ec404.jpg'
    return (
        <img className="img-result" src={src} alt={alt} onClick={props.onClick}>
        </img>
    )
}

export default Image