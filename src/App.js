import React, {useEffect, useState} from 'react';
import SheetsList from './components/Sheet/SheetsList';
import Header from './components/Header/Header';
import Front from './components/Front/Front';

const App = () => {

  return (
  <div className="App">
    <header className="header-menu">
      <Header pag="Home"/>
    </header>

    <div className="front-slogan"><Front pag=""/></div>

    <main>
      <section className="last-sheets">
        <SheetsList filter=""/>
      </section>
    </main>

  </div> );
}

export default App;
