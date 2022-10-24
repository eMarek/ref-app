import { Component } from 'react';

class AppClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foobar: "must be fun at the parties"
    }
    this.handleClick3 = this.handleClick3.bind(this)
  }
  handleClick1() {
    // Throws an error because not in scope.
    console.log("btn1", this.state.foobar)
  }
  handleClick2 = () => {
    console.log("btn2", this.state.foobar)
  }
  handleClick3() {
    console.log("btn3", this.state.foobar)
  }
  handleClick4() {
    console.log("btn4", this.state.foobar)
  }
  handleClick5(arg1) {
    console.log("btn5", this.state.foobar, arg1)
  }
  render() {
    return (
      <div style={{ padding: '10px' }}>
        <p>here comes the class thing</p>
        <button onClick={this.handleClick1}>Button 1</button>
        <button onClick={this.handleClick2}>Button 2</button>
        <button onClick={this.handleClick3}>Button 3</button>
        <button onClick={this.handleClick4()}>Button 4</button>
        <button onClick={this.handleClick5.bind(this, "waazzzaa")}>Button 5</button>
      </div>
    )
  }
}

export default AppClass;
