import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MainPage from './pages/MainPage.jsx';
import App from './App.jsx';
import AddRecipe from './pages/AddRecipe.jsx';

//categories
import Desserts from './pages/categoryPage/Desserts.jsx';
import Meat from './pages/categoryPage/Meat.jsx';
import Pastas from './pages/categoryPage/Pastas.jsx';
import Salads from './pages/categoryPage/Salads.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage}/>
    <Route path = "add" component={AddRecipe} />
    <Route path = "desserts" component={Desserts} />
    <Route path = "meat" component={Meat} />
    <Route path = "pastas" component={Pastas} />
    <Route path = "salads" component={Salads} />
  </Route>
);
