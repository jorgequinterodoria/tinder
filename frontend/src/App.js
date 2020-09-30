import React from 'react';
import './css/App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';

function App() {
  return (
    <div className="app">
      <h1>Tinder Clone</h1>
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
