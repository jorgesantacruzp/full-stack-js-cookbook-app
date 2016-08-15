import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const CustomApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render( < CustomApp / > , document.getElementById('app'));
