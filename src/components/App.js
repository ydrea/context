import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LangContext from "../context/LangContext";
import ColorContext from "../context/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends Component {
  state = { lang: "eng" };

  static contextType = LangContext;

  onLangChange = (lang) => {
    this.setState({ lang });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageSelector onLangChange={this.onLangChange} />
        <LangContext.Provider value={this.state.lang}>
          <ColorContext.Provider value="green">
            <UserCreate />
          </ColorContext.Provider>
        </LangContext.Provider>
      </div>
    );
  }
}

export default App;
