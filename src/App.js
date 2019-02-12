import React, { Component } from 'react';
import './App.css';
import PasswordInput from './PasswordInput';
import Registration from './Registration';
import Login from './Login';
import Logout from './LogoutButton';

function App() {
  return (
    <div className="App">
      <Login></Login>
      <hr></hr>
      <Registration></Registration>
      <hr></hr>
      <Logout></Logout>
    </div>
  );
}

export default App;
