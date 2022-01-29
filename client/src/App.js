
import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './views/Main';
import Create from './views/Create';
import Show from './views/Show';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/create'>
            <Create/>
          </Route>
          <Route path='/table'>
            <Table/>
          </Route>
          <Route path='/show/:id'>
            <Show/>
          </Route>
          <Route path='/'>
            <Main/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
