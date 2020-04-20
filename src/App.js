import React, { Component } from 'react';
import Letter, { AVAILABLE_LETTERS } from './Letter.js'
import Dictionnary from "./Dictionnary.js"

import './App.css';

class App extends Component {

    state = {
        fails: 0,
        letters: AVAILABLE_LETTERS,
        usedLetters: new Set(),
        word: Dictionnary.getRandomWord().toUpperCase()
    };

    // Produit une représentation textuelle de l’état de la partie,
    // chaque lettre non découverte étant représentée par un _underscore_.
    // (CSS assurera de l’espacement entre les lettres pour mieux
    // visualiser le tout).
    computeDisplay(phrase, usedLetters) {  
        return phrase.replace(/\w/g, (letter) => (usedLetters.has(letter) ? letter : '_')  )
    }

    handleClickLetter = (letter) => {
        const { usedLetters } = this.state
        usedLetters.add( letter )
        this.setState( state => ({
            usedLetters: usedLetters
        }))
    }

    render() {
        const { letters, usedLetters, word } = this.state
        return (
            <div className="App">
                <header className="App-header">
                    <div className="word">
                        { this.computeDisplay(word, usedLetters) }
                    </div>
                    <div className="letters">
                        {letters.map((letter, index) => (
                                <Letter key={index} letter={letter} onClick={this.handleClickLetter} />
                        ))}
                    </div>
                </header>
            </div>
        );
    }
}

export default App;