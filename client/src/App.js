import React from 'react';
import NavBar from './components/navbar/NavBar';
import SearchBar from './components/searchBar/SearchBar';
import './App.css';
import QueriedPlants from './components/queriedPlants/QueriedPlants';
import SinglePlant from './components/singlePlant/SinglePlant';
import PlantsLibrary from './components/plantsLibrary/PlantsLibrary';
import Login from './components/loginForm/Login';
import { Route } from "react-router-dom";




function App() {
  return (
    <div className="App"> 
    
      <Route exact path="/" render={props => (
        <>
          <NavBar />
          <SearchBar />
          <QueriedPlants />
          <PlantsLibrary />
        </>
      )} /> 
      
      <Route path="/plant/:id" render={props => <SinglePlant {...props} />} />
      <Route path="/login" render={props => <Login {...props}/>} />
    </div>
  );
}

export default App;
