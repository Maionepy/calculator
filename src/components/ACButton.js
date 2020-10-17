import React, { Component } from "react";
import "../App.css";

class ACButton extends Component {
  render() {
    return( 
      <div 
        className="ac-btn"
        onClick={() => this.props.handleClear()}
      >
        {this.props.children}
      </div>
    )
  }
}

export default ACButton;