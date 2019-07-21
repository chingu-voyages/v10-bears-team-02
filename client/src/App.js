import React from 'react';
import NavBar from './components/navbar/NavBar'
import SearchBar from './components/searchBar/SearchBar'
import './App.css';
import QueriedPlants from './components/queriedPlants/QueriedPlants';



function App() {
  return (
    <div className="App">
 
      <NavBar />
      <SearchBar />
      <QueriedPlants />
    </div>
  );
}

export default App;
