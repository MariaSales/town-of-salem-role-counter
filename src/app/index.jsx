import React, { Component } from 'react';
import { render } from 'react-dom';

import PlayersContainer from './players-container';
import RolesContainer from './roles-container';

class App extends Component {
  render() {
    return (
      <div>
        <p>Town Of Salem Helper</p>
        <PlayersContainer />
        <RolesContainer />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));