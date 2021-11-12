import React from 'react'
import './Image.scss'

function Image({ photo, updateSelectedPhoto }) {
    const handleOnClick = () => {
        updateSelectedPhoto({...photo})
    }

    return (
        <img className="img-result" src={photo.src.tiny} alt="Ảnh minh họa" onClick={handleOnClick}>
        </img>
    )
}

export default Image