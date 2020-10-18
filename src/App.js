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
      operator: "",
      lista: ["0","0","0","0"]
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

  eraseAll = () => {
    this.setState({ lista: ["0","0","0","0"] })
  };

  erasePrimeiro = () => {
    this.setState({ lista: [this.state.lista[1],this.state.lista[2],this.state.lista[3],"0"] });
  };

  eraseSegundo = () => {
    this.setState({ lista: [this.state.lista[0], this.state.lista[2], this.state.lista[3], "0"]});

  };

  eraseTerceiro = () => {
    this.setState({ lista: [this.state.lista[0], this.state.lista[1], this.state.lista[3], "0"]});
  };

  eraseQuarto = () => {
    this.setState({ lista: [this.state.lista[0], this.state.lista[1], this.state.lista[2], "0"]});
  };

  recoverLast = () => {
    this.setState({ input: this.state.lista[0] });
  };

  recoverPrimeiro = () => {
    this.setState({ input: this.state.lista[0] });
  };

  recoverSegundo = () => {
    this.setState({ input: this.state.lista[1] });
  };

  recoverTerceiro = () => {
    this.setState({ input: this.state.lista[2] });
  };

  recoverQuarto = () => {
    this.setState({ input: this.state.lista[3] });
  };

  saveRegister = () => {
    this.setState({ lista: [this.state.input, this.state.lista[0], this.state.lista[1], this.state.lista[2]]});
  };

  recoverLast = () => {
    this.setState({ input: this.state.lista[0] });
  };

  addLast = () => {
    this.setState({ input: parseFloat(this.state.lista[0]) + parseFloat(this.state.input) });
  };


  add = () => {
    if (this.state.input !== "" || this.state.previousNumber !== "") {
      if (this.state.operator !== "" && this.state.input == "") {
        this.setState({ operator: "+" })
      }
      else {
        this.state.previousNumber = this.state.input;
        this.setState({ input: "" });
        this.state.operator = "+";
      }
    }
  };

  subtract = () => {
    if (this.state.input !== "" || this.state.previousNumber !== "") {
      if (this.state.operator !== "" && this.state.input == "") {
        this.setState({ operator: "-" })
      }
      else {
        this.state.previousNumber = this.state.input;
        this.setState({ input: "" });
        this.state.operator = "-";
      }
    }
  };

  multiply = () => {
    if (this.state.input !== "" || this.state.previousNumber !== "") {
      if (this.state.operator !== "" && this.state.input == "") {
        this.setState({ operator: "*" })
      }
      else {
        this.state.previousNumber = this.state.input;
        this.setState({ input: "" });
        this.state.operator = "*";
      }
    }
  };

  divide = () => {
    if (this.state.input !== "" || this.state.previousNumber !== "") {
      if (this.state.operator !== "" && this.state.input == "") {
        this.setState({ operator: "/" })
      }
      else {
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
      else {
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
      else {
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
      else {
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
      else {
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
          <br /><br /><br />
          <div className="row">
            <Input>{this.state.previousNumber + this.state.operator + this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.eraseAll}>MC</Button>
            <Button handleClick={this.recoverLast}>MR</Button>
            <Button handleClick={this.addLast}>M+</Button>
            <Button handleClick={this.saveRegister}>MS</Button>
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
          <br /><br />
          <div className="row">
            <Button handleClick={this.erasePrimeiro}>MC</Button>
            <Button handleClick={this.recoverPrimeiro}>MR</Button>
            <div className="number">{parseFloat(this.state.lista[0]).toFixed(2)}</div>
          </div>
          <div className="row">
            <Button handleClick={this.eraseSegundo}>MC</Button>
            <Button handleClick={this.recoverSegundo}>MR</Button>
            <div className="number">{parseFloat(this.state.lista[1]).toFixed(2)}</div>
          </div>
          <div className="row">
            <Button handleClick={this.eraseTerceiro}>MC</Button>
            <Button handleClick={this.recoverTerceiro}>MR</Button>
            <div className="number">{parseFloat(this.state.lista[2]).toFixed(2)}</div>
          </div>
          <div className="row">
            <Button handleClick={this.eraseQuarto}>MC</Button>
            <Button handleClick={this.recoverQuarto}>MR</Button>
            <div className="number">{parseFloat(this.state.lista[3]).toFixed(2)}</div>
          </div>
          <br /><br /><br />
        </div>
      </div>
    );
  }
}

export default App;
