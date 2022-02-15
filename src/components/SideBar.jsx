import React from 'react'
import Toggle from './Toggle'

export default function SideBar(props) {
    const toggle = props.boxes.map(box => {
        return <Toggle 
        handelToggle={props.handelToggle}
        box={box}
        activeBox={props.activeBox}
        />
    })
    return (
        <aside>
            {toggle}
        </aside>
    )
}
