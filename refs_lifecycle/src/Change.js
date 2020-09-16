import React, { Component } from 'react';

class Chan extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    render(){
        return (
            <h1>Change
                <button onClick={this.props.change}>Go back</button>
            </h1>
        );
    }
}


export default Chan;
