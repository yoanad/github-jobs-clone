import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Search from './components/Search';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter>
        <Route path="/search/:page" >
          <Search />
        </Route>
      </BrowserRouter >
    </div >
  );
}

export default App;
