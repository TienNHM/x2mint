import React from 'react'
import './Select.scss'

function Select({ data }) {
    return (
        <select name={data.type} onChange={() => alert('Select')} className="app-select">
            {data.options.map(
                (option, index) =>
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>)}
        </select>
    )
}

export default Select