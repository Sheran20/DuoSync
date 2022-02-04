import React, { Component } from "react";

class PrevTurns extends Component {
    
    render () {
        return (
            <div style={{width: '50%'}}>
                <h2>P{this.props.playerNumber} Guess</h2>
                <div className="player-guess">
                    {this.props.inputs.map(element => {
                    return <div style={{paddingBottom: "10px"}}>{element}</div>
                    })}
                </div>
            </div>
        )
    }
}

export default PrevTurns;