import React, { Component } from "react";
import LangContex from "../context/LangContext";

export default class Field extends Component {
  static contextType = LangContex;

  render() {
    const text = this.context === "eng" ? "Name" : "Ime";
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}
