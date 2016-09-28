import React, { Component } from 'react';

import { connect } from 'react-redux'
import * as actions from '../actions';

import { MuiThemeProvider } from 'material-ui';
import Main from './Main'


class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Main />
        
      </MuiThemeProvider>
    );
  }
}

export default connect((state => state), actions)(App)
