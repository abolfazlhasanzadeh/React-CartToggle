import React from 'react'
import Box from './Box'

export default function Boxes(props) {
    const carts = props.boxes.map(cart => {
        if (props.activeBox.includes(cart.id)) {
            return <Box title={cart.title}/>
        }
    })
    return (
        <div className="box-warpper">
            {carts}
        </div>
    )
}
