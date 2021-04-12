import React, { Component } from "react";
import LangContext from "../context/LangContext";

export default class LanguageSelector extends Component {
  static contextType = LangContext;
  render() {
    const text = this.context === "eng" ? "Select" : "Odaberi";
    return (
      <div>
        <div>
          {text}
          <i
            className="flag gb"
            onClick={() => this.props.onLangChange("eng")}
          />
          <i
            className="flag hr"
            onClick={() => this.props.onLangChange("hrv")}
          />
        </div>
      </div>
    );
  }
}
