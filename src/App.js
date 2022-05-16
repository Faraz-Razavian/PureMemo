import React from "react";
import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3";
class App extends React.Component{
  constructor(){
    super()
    this.state={
      name:"Faraz"
    }
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({
        name:"Faraz"
      })
    }, 2000);
  }
  render(){
    console.log("Main component")
    return (
    <React.Fragment>
      <h1>Please press f12</h1>
      <br/>
      <br/>
      <h1>Main Component</h1>
    <Test1/>
    <Test2/>
    <Test3 name={this.state.name}/>
    </React.Fragment>
  );
  }
}

export default App;
