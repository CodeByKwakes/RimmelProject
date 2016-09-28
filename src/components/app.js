import React, { Component } from 'react';

import { MuiThemeProvider } from 'material-ui';
import Main from './Main'


class App extends Component {

  render(props) {
    return (
      <MuiThemeProvider>
        <Main />
        {props.children}
      </MuiThemeProvider>
    );
  }
}

export default App
