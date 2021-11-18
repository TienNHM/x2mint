import React, { useState } from 'react'
import './Image.scss'

function Image({ photo, index, selectedIndex, updateSelectedPhoto }) {
    return (
        <img className={index === selectedIndex ? 'img-result selected' : 'img-result'}
            src={photo.src.tiny}
            alt="Ảnh minh họa"
            onClick={() => updateSelectedPhoto({ ...photo }, index)}>
        </img>
    )
}

export default Image