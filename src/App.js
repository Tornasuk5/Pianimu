import React from 'react';
import {Route, Switch} from "wouter";
import Home from 'pages/Home/Home';
import Sheets from 'pages/Sheets';
import Animes from 'pages/Animes';
import VisualNovels from 'pages/VisualNovels';
import Header from 'components/Header';
import SheetInfo from 'pages/SheetInfo';
import AnimeSheets from 'pages/AnimeSheets';
import Footer from 'components/Footer';
import { GridViewContextProvider } from 'context/GridViewContext';

const App = () => {

  return (
  <div className="App">

    <header className="header-menu">
        <Header/>
    </header>

    <Switch>

      <Route path="/" component={Home} />

      <Route path="/sheets" component={Sheets} />

      <Route path="/sheets/:sheetPath">
        { props => <SheetInfo sheetPath={props.sheetPath}/> }
      </Route>

      <Route path="/animes" component={Animes} />

      <Route path="/animes/:animePath">
        { props => <AnimeSheets animePath={props.animePath}/> }
      </Route>

      <Route path="/visual-novels" component={VisualNovels} />

      <Route path="/visual-novels/:vnPath">
        { props => <AnimeSheets animePath={props.vnPath}/> }
      </Route>

      <Route path="/animes/:animePath/:sheetPath">
            { props => <SheetInfo sheetPath={props.sheetPath}/> }
      </Route>

      <Route path="/visual-novels/:vnPath/:sheetPath">
            { props => <SheetInfo sheetPath={props.sheetPath}/> }
      </Route>

    </Switch>

    <Footer></Footer>
    
  </div> );
}

export default App;
