import React from 'react'
import './MyImage.scss'

function MyImage({ photo, index, selectedIndex, updateSelectedPhoto }) {
    return (
        <img className={index === selectedIndex ? 'img-result selected' : 'img-result'}
            src={photo.src.tiny}
            alt="Ảnh minh họa"
            onClick={() => updateSelectedPhoto({ ...photo }, index)}>
        </img>
    )
}

export default MyImage