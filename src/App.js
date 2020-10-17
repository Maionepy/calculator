import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
import ACButton from "./components/ACButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  addDecimal = val => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  addZeroToInput = val => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({ input: "" });
    this.state.operator = "";
    this.state.previousNumber = ""; 

  };

  ACInput = () => {
    this.setState({ input: "" });

  };

  add = () => {
    if (this.state.input !== "" || this.state.previousNumber !== ""){
      if (this.state.operator !== "" && this.state.input == ""){
        this.setState({ operator: "+" })
      }
      else{
        this.state.previousNumber = this.state.input;
        this.setState({ input: "" });
        this.state.operator = "+";
      }
  }
  };

  subtract = () => {
    if (this.state.input !== "" || this.state.previousNumber !== ""){
      if (this.state.operator !== "" && this.state.input == ""){
        this.setState({ operator: "-" })
      }
      else{
        this.state.previousNumber = this.state.input;
        this.setState({ input: "" });
        this.state.operator = "-";
      }
    }
  };
  
  multiply = () => {
    if (this.state.input !== "" || this.state.previousNumber !== ""){
      if (this.state.operator !== "" && this.state.input == ""){
        this.setState({ operator: "*" })
      }
      else{
        this.state.previousNumber = this.state.input;
        this.setState({ input: "" });
        this.state.operator = "*";
      }
    }
  };

  divide = () => {
    if (this.state.input !== "" || this.state.previousNumber !== ""){
      if (this.state.operator !== "" && this.state.input == ""){
        this.setState({ operator: "/" })
      }
      else{
        this.state.previousNumber = this.state.input;
        this.setState({ input: "" });
        this.state.operator = "/";
      }
    }
  };

  evaluate = () => {
    this.state.currentNumber = this.state.input;
    
    if (this.state.operator == "+") {
      if (this.state.currentNumber == "") {
        this.setState({
          input:
          parseFloat(this.state.previousNumber) +
          parseFloat("0")
        });
      }
      else{
        this.setState({
          input:
            parseFloat(this.state.previousNumber) +
            parseFloat(this.state.currentNumber)
        });
      }
    } else if (this.state.operator == "-") {
      if (this.state.currentNumber == "") {
        this.setState({
          input:
          parseFloat(this.state.previousNumber) -
          parseFloat("0")
        });
      }
      else{
        this.setState({
          input:
            parseFloat(this.state.previousNumber) -
            parseFloat(this.state.currentNumber)
        });
      }
    } else if (this.state.operator == "*") {
        if (this.state.currentNumber == "") {
          this.setState({
            input:
            parseFloat(this.state.previousNumber) *
            parseFloat("1")
          });
        }
        else{
          this.setState({
            input:
              parseFloat(this.state.previousNumber) *
              parseFloat(this.state.currentNumber)
          });
        }
    } else if (this.state.operator == "/") {
      if (this.state.currentNumber == "") {
        this.setState({
          input:
          parseFloat(this.state.previousNumber) /
          parseFloat("1")
        });
      }
      else{
        this.setState({
          input:
            parseFloat(this.state.previousNumber) /
            parseFloat(this.state.currentNumber)
        });
      }
    }

    this.state.previousNumber = "";
    this.state.operator = "";

  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.previousNumber + this.state.operator + this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.subtract}>-</Button>
          </div>
          <div className="row">
            <ACButton handleClear={this.ACInput}>AC</ACButton>
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
