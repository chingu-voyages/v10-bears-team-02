import React from 'react';
import NavBar from './components/navbar/NavBar';
import './App.css';
import QueriedPlants from './components/queriedPlants/QueriedPlants';
import SinglePlant from './components/singlePlant/SinglePlant';
import PlantsLibrary from './components/plantsLibrary/PlantsLibrary';
import HomePage from './components/homePage/HomePage';
import Login from './components/loginForm/Login';
import SignUp from './components/signUpForm/SignUp'
//import { connect } from 'react-redux';
import { Route } from "react-router-dom";

function App() {
  
 
  return (
    <div className="App">            
      <Route path="/" render={props => <NavBar {...props}/>} />
      <Route exact path="/" render={props => (
          <HomePage {...props} />
      )} /> 
      
      <Route path="/searchresults" render={props => <QueriedPlants {...props} />} />
      <Route path="/plant/:id" render={props => <SinglePlant {...props} />} />
      <Route path="/login" render={props => <Login {...props} />} />
      <Route path="/signup" render={props =><SignUp {...props } /> } />
      <Route path="/mygarden" render={props => <PlantsLibrary {...props} />} />
    </div>
  );
}
//add actionhere
export default App;
