import React, { Component } from 'react';
import PropTypes from 'prop-types'
import "./Letter.css"

class Letter extends Component {

    state = {
        isUsed: false
    }

    onClick = () => {
        this.setState( state => ({
            isUsed: true
        }))
        this.props.onClick(this.props.letter);
    }

    render(){
        const { isUsed } = this.state
        return (
            <button className={`letter ${isUsed ? "is-used " : ""}`} onClick={this.onClick} disabled={isUsed}>
                {this.props.letter}
            </button>
        );
    }
}

Letter.propTypes = {
    letter: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Letter;

export const AVAILABLE_LETTERS = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", 
    "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
    "S", "T", "U", "V", "W", "X", "Y", "Z",
];