
import React from 'react';
import ReactDOM from 'react-dom';
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

require('applicationStyles')


//$(document).foundation();

import AppContainer from './containers/app.container'

class App extends React.Component {
  render () {
    return (
      <AppContainer />
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('content')
);
