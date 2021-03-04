import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import {EditUser} from './components/EditUser';
import {GlobalProvider} from './context/GlobalState';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App" style={{maxWidth: '40rem', margin: '4rem auto'}}>
      <GlobalProvider>
        <Router>
            <h1>Nav</h1>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/add" component={AddUser} />
              <Route exact path="/edit/:id" component={EditUser} />
            </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
