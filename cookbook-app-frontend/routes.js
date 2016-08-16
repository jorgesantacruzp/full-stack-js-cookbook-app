import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MainPage from './pages/MainPage.jsx';
import App from './App.jsx';
import AddRecipe from './pages/AddRecipe.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage}/>
    <Route path = "add" component={AddRecipe} />
  </Route>
);
