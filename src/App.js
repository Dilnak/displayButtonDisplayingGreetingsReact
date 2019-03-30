import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
      
this.state ={
  data:""

}
this.display=this.display.bind(this)
    };
  
display(){
  var today = new Date()
var curHr = today.getHours()

  if (curHr < 12) {
    this.setState({data:"Good Morning Dilna"})
  } else if (curHr < 18) {
    this.setState({data:"Good After Noon Dilna"})
  } else {
    this.setState({data:"Good Evening Dilna"})  }
}
    
  
  render() {
    return (
      <div className="App">
        <button onClick={this.display}>click</button>
        <h1>{this.state.data}</h1>
      </div>
    );
  }
}

export default App;
