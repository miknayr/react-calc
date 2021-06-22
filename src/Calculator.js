import React, { Component } from 'react'


export default class Calculator extends Component {
  constructor(props) {
    super()
    this.state = {
        num1: 0,
        num2: 0,
        total: 0

    }
  } 

  setNum = (e, num) => {
    this.setState({ [num]: e.target.value});
  }

  sumNum = (e) => {
    console.log(this.state)
    let newSum = Number(this.state.num1) + Number(this.state.num2)
    this.setState({total: newSum})
  }
  subNum = (e) => {
    console.log(this.state)
    let newSub = Number(this.state.num1) - Number(this.state.num2)
    this.setState({total: newSub})
  }
  multiNum = (e) => {
    console.log(this.state)
    let newMulti = Number(this.state.num1) * Number(this.state.num2)
    this.setState({total: newMulti})
  }
  divNum = (e) => {
    console.log(this.state)
    let newDiv = Number(this.state.num1) / Number(this.state.num2)
    this.setState({total: newDiv})
  }



  render() {
    return (
      <div className="container">
        <h1>Math with React!</h1>

        <div className="add">
          <input type="number"
            name="num1"
            placeholder="Enter your first number"
            value={this.state.num1}
            onChange={ (e) => this.setNum(e, 'num1') }
          />

          <span> and </span>

          <input type="number"
            name="num2"
            placeholder="Enter your second number"
            value={this.state.num2}
            onChange={ (e) => this.setNum(e, 'num2') }
          />

       
          <button onClick={(e) => this.sumNum(e)}>+ =</button>
          <button onClick={(e) => this.subNum(e)}>- =</button>
          <button onClick={(e) => this.multiNum(e)}>* =</button>
          <button onClick={(e) => this.divNum(e)}>/ =</button>

          <h3>{ this.state.total }</h3>
        </div>
      </div>
    )
  }
}