import React from 'react';
import NavBar from './components/navbar/NavBar'
import './App.css';
import QueriedPlants from './components/queriedPlants/QueriedPlants';



function App() {
  return (
    <div className="App">
 
      <NavBar/>
      <QueriedPlants />
    </div>
  );
}

export default App;
