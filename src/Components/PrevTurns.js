import React, { Component } from "react";

class PrevTurns extends Component {
    
    render () {
        return (
            <div style={{width: '50%'}}>
                Player {this.props.playerNumber}
                {this.props.inputs.map(element => {
                return <div>{element}</div>
                })}
            </div>
        )
    }
}

export default PrevTurns;