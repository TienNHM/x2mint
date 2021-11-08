import React from 'react'
import './Answer.scss'

function Answer({ name, content, onClick }) {
    const css = 'answer answer-' + name
    return (
        <div className={css}>
            <div className="answer-icon">{name}</div>
            <div className="answer-content">{content}</div>
            <div className="answer-checkbox">
                <input type="checkbox" className="btn-checkbox" name={name} value={name}
                    onClick={onClick}>
                </input>
            </div>
        </div>
    )
}

export default Answer