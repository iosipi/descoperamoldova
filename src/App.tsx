import React from 'react';
import Header from './components/header/Header';
import ParcLists from './components/ParcLists/ParcLists';
import  { useState } from 'react';


function App() {
  const [region, setRegion] = useState<string>('');

  return (
    <div className="App">
      <Header onRegionChange={(region) => setRegion(region)} />
      <h1>Descopera Moldova Acum</h1>
      <ParcLists region={region} />
    </div>

    
  );
}

export default App;
