import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class Player extends Component {

    state = {
        userInput: "",
        playerRound: 1
    }

    submitData = () => {
        console.log("submitted");
        this.props.updateTurn(this.state.userInput);
    }

    clearInputs = () => {
        this.setState({ userInput: "", playerRound: this.state.playerRound + 1 });
    }

    render() {
        return (
            <div>
                <TextField
                    disabled={this.props.playerNumber !== this.props.turn}
                    onChange={(event) =>
                        this.setState({ userInput: event.target.value })
                    }
                    type="password"
                    id="outlined-basic"
                    label="Enter Word"
                    variant="outlined"
                    value={this.state.userInput}
                    />
                <Button onClick={this.submitData} variant="contained">Submit</Button>

                {this.state.submitted ? <p>{this.state.userInput}</p> : null}
                {this.props.currentRound !== this.state.playerRound ? this.setState({ userInput: "", playerRound: this.state.playerRound + 1 }) : null}
            </div>
        )
    }
}

export default Player;