import React, { Component } from 'react';
import { Search } from 'containers';
import 'scss/App.scss';
import Configs from 'static/config';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>{Configs.messages.title}</h1>
        </header>
        <Search />
      </React.Fragment>
    );
  }
}

export default App;
