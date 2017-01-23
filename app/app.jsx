
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');



// require('foundation-sites/dist/foundation.min.css')


require('applicationStyles')
$(document).foundation();
 

ReactDOM.render(
  <p>Boliler</p>,
  document.getElementById('content')
);
