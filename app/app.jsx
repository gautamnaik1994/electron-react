
import React from 'react';
import ReactDOM from 'react-dom';
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

require('applicationStyles')
import Search from './components/search.component';

//$(document).foundation();

class App extends React.Component {
    render() {
        return (
          <Search />
        );
    }
};

 

ReactDOM.render(
  <App/ >,
  document.getElementById('content')
);
