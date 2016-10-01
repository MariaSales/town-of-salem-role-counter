import React, { Component } from 'react';
import { render } from 'react-dom';

import RolesContainer from './roles-container';

class App extends Component {
  render() {
    return (
      <div>
        <p>Hello Salemo!</p>
        <RolesContainer />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));