import React from 'react';
import SwipeButtons from 'SwipeButtons';
import './App.css';
import Header from  "./Header"
import TinderCards from './TinderCards';
function App() {
  return (
    <div className="app">
  
     <Header/>
     <TinderCards/>
     <SwipeButtons/>
    </div>
  );
}

export default App;
