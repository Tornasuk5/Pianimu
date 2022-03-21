import React, {useEffect, useState} from 'react';
import { Link, Route, Switch} from "wouter";
import Home from './pages/Home';
import Sheets from './pages/Sheets';
import Animes from './pages/Animes';
import VisualNovels from './pages/VisualNovels';
import Header from './components/sections/Header';
import SheetInfo from './pages/SheetInfo';

const App = () => {

  return (
  <div className="App">
    <header className="header-menu">
        <Header/>
    </header>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sheets" component={Sheets} />
      <Route path="/sheets/:sheet" component={SheetInfo} />
      <Route path="/animes" component={Animes} />
      <Route path="/visual-novels" component={VisualNovels} />
    </Switch>
    
  </div> );
}

export default App;
