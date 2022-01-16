import React, { Component } from "react";
import Player from "./Player";
import Button from '@mui/material/Button';

class Controller extends Component {

    state = {
        currentPlayer: 1,
        currentRound: 1,
        player1Input: "",
        player2Input: "",
        player1Inputs: [],
        player2Inputs: []
    }

    finishRound = () => {
        this.setState({
            currentPlayer: 1, 
            currentRound: this.state.currentRound + 1, 
            player1Inputs: [...this.state.player1Inputs, this.state.player1Input],
            player2Inputs: [...this.state.player2Inputs, this.state.player2Input]
        })
    } 
    
    render () {
        return (
            <div>
                <div>
                    Round {this.state.currentRound}
                </div>
                {this.state.player1Inputs.map(element => {
                    return <div>{element}</div>
                })}
                {(this.state.currentPlayer !== 0) ? <div>Player {this.state.currentPlayer} Turn</div> : <div> Round Finished </div>}
                <Player
                turn={this.state.currentPlayer}
                playerNumber={1}
                updateTurn={(input) => this.setState({currentPlayer: 2, player1Input: input})}
                currentRound = {this.state.currentRound}
                />
                <Player
                turn={this.state.currentPlayer}
                playerNumber={2}
                updateTurn={(input) => this.setState({currentPlayer: 0, player2Input: input})}
                currentRound = {this.state.currentRound}  
                />
                <Button onClick={this.finishRound} variant="contained">Next Round</Button>
            </div>

        )
    }
}

export default Controller;