import React, { Component } from "react";
import Player from "./Player";
import PrevTurns from "./PrevTurns";
import Button from '@mui/material/Button';

class Controller extends Component {

    state = {
        currentPlayer: 1,
        currentRound: 1,
        player1Input: "",
        player2Input: "",
        player1Inputs: [],
        player2Inputs: [],
        roundFinished: false,
        gameFinished: false
    }

    finishRound2 = () => {
        if (this.state.player1Input.toUpperCase() === this.state.player2Input.toUpperCase()) {
            this.setState({
                currentPlayer: 0,  
                player1Inputs: [...this.state.player1Inputs, this.state.player1Input.toUpperCase()],
                player2Inputs: [...this.state.player2Inputs, this.state.player2Input.toUpperCase()],
                gameFinished: true
            })
        } else {
            this.setState({
                currentPlayer: 1, 
                currentRound: this.state.currentRound + 1, 
                player1Inputs: [...this.state.player1Inputs, this.state.player1Input.toUpperCase()],
                player2Inputs: [...this.state.player2Inputs, this.state.player2Input.toUpperCase()],
                gameFinished: false
            })
        }
    }

    newGame = () => {
        this.setState({
            currentPlayer: 1, 
            currentRound: 0, 
            player1Inputs: [],
            player2Inputs: [],
            gameFinished: false
        })
    }
    
    render () {
        return (
            <div>
            <div id="game-header" style={{fontSize: '30px', textAlign: 'center', marginBottom: '20px'}}>
            <div>Round {this.state.currentRound}</div>
            {(this.state.currentPlayer !== 0 && !this.state.gameFinished) ? <div>Player {this.state.currentPlayer} Turn</div> : <div> Round Finished </div>}
            {this.state.gameFinished && <div style={{color: "green"}}> You Win!! </div>}
            </div>
            <div style={{display: 'flex', height: '50vh', justifyContent: 'center', textAlign: 'center'}}>
                <div id="player1-box">
                <Player
                turn={this.state.currentPlayer}
                playerNumber={1}
                updateTurn={(input) => this.setState({currentPlayer: 2, player1Input: input})}
                currentRound = {this.state.currentRound}
                />
                </div>
                <div id="prev-turns" style={{width: "40%", display: 'flex'}}>
                <PrevTurns
                playerNumber={1}
                inputs={this.state.player1Inputs}
                />
                <PrevTurns
                playerNumber={2}
                inputs={this.state.player2Inputs}
                />
                </div>
                <div id="player2-box">
                <Player
                turn={this.state.currentPlayer}
                playerNumber={2}
                updateTurn={(input) => this.setState({currentPlayer: 0, player2Input: input})}
                currentRound = {this.state.currentRound}  
                />
                </div>
            </div>
            {!this.state.gameFinished ? 
            <div className="continue-button" style={{textAlign: 'center'}}>
                <Button 
                color="success"
                onClick={this.finishRound2}
                disabled={this.state.currentPlayer === 0 ? false : true} 
                variant="contained">
                    Next Round
                </Button>
            </div> 
            : 
            <div className="continue-button" style={{textAlign: 'center'}}>
                <Button
                color="success"
                onClick={this.newGame}   
                variant="contained">
                    Play Again!
                </Button>
            </div>}
            </div> 
        )
    }
}

export default Controller;