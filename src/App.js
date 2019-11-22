import React, { Component } from 'react';
import {connect} from 'react-redux';

class App extends Component {
  render(){
    const {posts}= this.props;
    console.log("aikol", posts);
    const theme = posts.map(post=>(
      <div key = {post.id}>{post.title}</div>
    ))
    return (
      <div className="App">
        {theme}
      </div>
    );
  }
}

const mapStateToProps = (state)=>{//state is the reducers
  console.log("ok", state)
  return {
    posts: state
  }
}

export default connect(mapStateToProps)(App);
