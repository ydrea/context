import React, { Component } from "react";
import LangContext from "../context/LangContext";

export default class Button extends Component {
  static contextType = LangContext;

  render() {
    const text = this.context === "eng" ? "Click" : "Klikni";
    return (
      <div>
        <button className="ui button primary">{text}</button>
      </div>
    );
  }
}
