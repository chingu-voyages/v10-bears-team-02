import React from 'react';
import NavBar from './components/navBar/NavBar'
import './App.css';
import InputField from './components/inputField/InputField'



function App() {
  return (
    <div className="App">
 
      <NavBar/>
      <InputField name='query'/>
    </div>
  );
}

export default App;
