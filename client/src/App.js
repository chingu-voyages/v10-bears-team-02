import React from 'react';
import NavBar from './components/navbar/NavBar'
import SearchBar from './components/searchBar/SearchBar'
import './App.css';
import QueriedPlants from './components/queriedPlants/QueriedPlants';
import PlantCard from './components/plantCard/PlantCard';



function App() {
  return (
    <div className="App">
 
      <NavBar />
      <SearchBar />
      <PlantCard />
      <QueriedPlants />
    </div>
  );
}

export default App;
