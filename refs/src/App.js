import React, { Component } from 'react';
import {connect} from 'react-redux';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {color: "red"};
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener("click", this.setSpans);
    }

    setSpans = ()=> {
        this.setState({ color : "blue"});
    }
    render(){
        const obj = {
            color: this.state.color,
        }
        return (
            <div ref={this.imageRef} style={obj}>
                Click me to change my color to blue!
            </div>
        );
    }
}

const mapStateToProps = (state)=>{//state is the reducers
  return {
    posts: state
  }
}

export default connect(mapStateToProps)(App);
