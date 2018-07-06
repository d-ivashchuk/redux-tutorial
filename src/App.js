import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import Counter from './containers/Counter/Counter.js';

injectGlobal`
  body{
    margin: 0;
    padding:0;
  }
`;

class App extends Component {
  render() {
    return <Counter />;
  }
}

export default App;
