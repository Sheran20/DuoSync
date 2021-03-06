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
        this.setState({userInput: ""});
    }

    render() {
        return (
            <div style={{padding: '40px'}}>
                <div style={{textAlign: 'center', fontSize: '20px', marginBottom: '40px'}}>Player {this.props.playerNumber}</div>
                <div className="text-box">
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
                </div>
                <div style={{textAlign: 'center', marginTop: '20px'}}>
                {this.state.submitted ? <p>{this.state.userInput}</p> : null}
                {this.props.currentRound !== this.state.playerRound ? this.setState({ userInput: "", playerRound: this.props.currentRound}) : null}
                </div>
                <div style={{textAlign: 'center'}}>
                    <Button 
                    color="success"
                    className="submit-btn"
                    onClick={this.submitData}
                    disabled={this.props.playerNumber !== this.props.turn} 
                    variant="contained">
                        Submit
                    </Button>
                </div>
            </div>
        )
    }
}

export default Player;