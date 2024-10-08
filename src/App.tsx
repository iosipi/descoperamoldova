import React from 'react';
import logo from './logo.svg';
import Header from './components/header/Header';
import './App.css';
import ParcLists from './components/ParcLists/ParcLists';
import { useState } from 'react';

function App() {
  const [region, setRegion] = useState('');
  return (
    <div className="App">
      <Header/>
      <h1>Descopera Moldova Acum</h1>
      <ParcLists region={region}/>
    </div>
  );
}

export default App;
