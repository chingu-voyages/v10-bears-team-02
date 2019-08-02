import React, { useEffect }from 'react';
import NavBar from './components/navbar/NavBar';
import SearchBar from './components/searchBar/SearchBar';
import './App.css';
import QueriedPlants from './components/queriedPlants/QueriedPlants';
import SinglePlant from './components/singlePlant/SinglePlant';
import PlantsLibrary from './components/plantsLibrary/PlantsLibrary';
import Login from './components/loginForm/Login';
import SignUp from './components/signUpForm/SignUp'
import { connect } from 'react-redux';
import { Route } from "react-router-dom";




function App() {
  
  const checkAuth = (props) => {    
    console.log('check for cookie and deserialize user')

  }

  useEffect(checkAuth)
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
      <Route path="/login" render={props => <Login {...props} />} />
      <Route path="/signup" render={props =><SignUp {...props } /> } />
    </div>
  );
}
//add actionhere
export default connect(null, {})(App);
