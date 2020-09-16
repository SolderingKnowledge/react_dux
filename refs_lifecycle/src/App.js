import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chan from "./Change";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {color: "red", page: true};
        this.imageRef = React.createRef();
        console.log("contructor");
    }

    componentWillMount(){
        console.log("componentWillMount");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentDidMount(){
        this.imageRef.current.addEventListener("click", this.setSpans);
        console.log("componentDidMount");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    setSpans = ()=> {
        console.log("setState")
        this.setState({ color : "blue"});
    }
    
    change=()=>{
        this.setState({page: !this.state.page});
    }

    render(){
        console.log("render");
        const obj = {
            color: this.state.color,
        }
        if(!this.state.page){
            return <Chan page={this.state.page} change={this.change} />
        }
        return (
            <div ref={this.imageRef} style={obj}>
                Click me to change my color to blue!
                <button onClick={this.change}>Click me</button>
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
