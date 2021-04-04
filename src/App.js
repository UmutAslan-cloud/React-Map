import React, { Component } from 'react'
import './App.css';
import foreigners from './services/foreigners.json'

import PersonContainer from './components/PersonContainer'

function App() {
  return (
    <div className="App">
   
     <PersonContainer list={foreigners}/>
    </div>
  );
}

export default App;

