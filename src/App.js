import React, {useEffect, useState} from 'react';
import { Link, Route } from "wouter";
import Home from './pages/Home';
import Sheets from './pages/Sheets';
import Animes from './pages/Animes';
import VisualNovels from './pages/VisualNovels';
import Header from './components/sections/Header';


const App = () => {

  return (
  <div className="App">
    <header className="header-menu">
      <Header/>
    </header>
    <Route path="/" component={Home} />
    <Route path="/sheets" component={Sheets} />
    <Route path="/animes" component={Animes} />
    <Route path="/visual-novels" component={VisualNovels} />
  </div> );
}

export default App;
