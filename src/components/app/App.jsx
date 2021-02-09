import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from '../header/Header';
import AllCharacters from '../../containers/allCharacters/AllCharacters';
import OneCharacterDetails from '../../containers/oneCharacterDetails/OneCharacterDetails';

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route 
            path="/" 
            exact
            component={AllCharacters} 
          />
          <Route 
            path="/:details" 
            exact
            component={OneCharacterDetails} 
          />
        </Switch>
      </Router>
    </div>
  );
}
