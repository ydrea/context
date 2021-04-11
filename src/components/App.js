import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LangContext from "../context/LangContext";

class App extends Component {
  state = { lang: "eng" };

  static contextType = LangContext;

  onLangChange = (lang) => {
    this.setState({ lang });
  };

  render() {
    const text = this.context === "eng" ? "Select" : "Odaberi";
    return (
      <div className="ui container">
        <div>
          {text}
          <i className="flag gb" onClick={() => this.onLangChange("eng")} />
          <i className="flag hr" onClick={() => this.onLangChange("hrv")} />
        </div>
        {this.state.lang}
        <LangContext.Provider value={this.state.lang}>
          <UserCreate />
        </LangContext.Provider>
      </div>
    );
  }
}

export default App;
