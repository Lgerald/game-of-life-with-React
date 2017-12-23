import React, { Component } from "react";


export default class Box extends Component {
    selectBox = () => {
        this.props.selectBox(this.props.row, this.props.col)
    }
    render() {
        return (
            <div 
                className={this.props.boxClass}
                id={this.props.id}
                onClick={this.selectBox}
            />
        )
    }

}