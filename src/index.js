import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//https://react-bootstrap.github.io/getting-started/introduction/
import Main from './pages/main';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Serach from './pages/serach';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={Main} />
    <Route exact path="/page1" component={Page1} />
    <Route exact path="/page2" component={Page2} />
    <Route path="/search/:search" 
      render={props => <Serach search={props.match.params.search}/>} />
  </BrowserRouter>,
  document.getElementById('root')
);

