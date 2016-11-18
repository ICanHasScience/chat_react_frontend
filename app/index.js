var React = require('react');
var ReactDOM = require('react-dom');
// var routes = require('config/routes');
var Test = require('components/Test');

var ReactRouter = require( 'react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
import { browserHistory } from 'react-router';


console.log(Test)
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Test}>
    </Route>
  </Router>,
  document.getElementById('app')
);