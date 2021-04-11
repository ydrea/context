import React, { Component } from "react";

class App extends Component {
  state = { lang: "English" };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag gb" />
          <i className="flag hr" />
        </div>
      </div>
    );
  }
}

export default App;
