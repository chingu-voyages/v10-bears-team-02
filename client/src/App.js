import React from 'react';
import NavBar from './components/navbar/NavBar'
import './App.css';
import SearchBar from './components/searchBar/SearchBar'
import QueriedPlants from './components/queriedPlants/QueriedPlants';



function App() {
  return (
    <div className="App">
 
      <NavBar/>
      <SearchBar />
      <QueriedPlants />
    </div>
  );
}

export default App;
