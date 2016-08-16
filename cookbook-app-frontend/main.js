import React from 'react';
import ReactDOM from 'react-dom';

import {Router, browserHistory} from 'react-router';
import routes from './routes';

import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const CustomApp = () => (
  <MuiThemeProvider>
    <Router history={browserHistory} routes={routes}/>
  </MuiThemeProvider>
);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render( < CustomApp / > , document.getElementById('app'));
