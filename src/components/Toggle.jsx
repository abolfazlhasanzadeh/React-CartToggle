import React from 'react'

export default function Toggle(props) {
    return (
        <div className="toggle">
            <span>{props.box.title}</span>
            <label className="switch">
                <input type="checkbox" checked={props.activeBox.includes(props.box.id)} />
                <span className="slider round" onClick={(e) => props.handelToggle(props.box.id)}></span>
            </label>
        </div>
    )
}
