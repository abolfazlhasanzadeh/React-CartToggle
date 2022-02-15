import React, { Component } from 'react'
import SideBar from './SideBar'
import Boxes from './Boxes'

export default class Main extends Component {
    state = {
        boxes: [
            { id: 1, title: "box 1" },
            { id: 2, title: "box 2" },
            { id: 3, title: "box 3" },
            { id: 4, title: "box 4" },
        ],
        activeBox: [1, 2, 3, 4]
    }
    handelToggle = (id) => {
        const activeBox = [...this.state.activeBox]
        if (activeBox.includes(id)) {
            activeBox.splice(activeBox.indexOf(id), 1)
        } else {
            activeBox.push(id)
        }
        this.setState(state => {
            return {
                ...state, activeBox
            }
        })
    }
    render() {
        return (
            <>
                <SideBar
                    handelToggle={this.handelToggle}
                    boxes={this.state.boxes}
                    activeBox={this.state.activeBox}
                />
                <Boxes
                    boxes={this.state.boxes}
                    activeBox={this.state.activeBox}
                />
            </>
        );
    }
}

