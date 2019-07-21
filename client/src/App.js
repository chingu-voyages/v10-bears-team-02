import React from 'react';
import NavBar from './components/navbar/NavBar'
import SearchBar from './components/searchBar/SearchBar'
import './App.css';
import QueriedPlants from './components/queriedPlants/QueriedPlants';
import PlantCard from './components/plantCard/PlantCard';
import { Route } from "react-router-dom";




function App() {
  return (
    <div className="App"> 
      <Route exact path="/" render={props => (
        <>
          <NavBar {...props} />
          <SearchBar />
          <QueriedPlants />
        </>
      )} />     
    </div>
  );
}

export default App;
