import React, { Component } from "react";
import LangContext from "../context/LangContext";
import ColorContext from "../context/ColorContext";

export default class Button extends Component {
  // static contextType = LangContext;
  renderSubmit(value) {
    return value === "eng" ? "click" : "klik";
  }
  render() {
    return (
      <div>
        <ColorContext.Consumer>
          {(color) => (
            <button className={`ui button ${color}`}>
              <LangContext.Consumer>
                {(value) => this.renderSubmit(value)}
              </LangContext.Consumer>
            </button>
          )}
        </ColorContext.Consumer>
      </div>
    );
  }
}
