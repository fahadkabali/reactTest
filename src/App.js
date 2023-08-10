import logo from './logo.svg';
import './App.css';
import React from 'react';
import Main from './components/main'
import NavBar from './components/navbar';

export default function App(){
  return(
    <div>
      <NavBar/>
      <Main/>
    </div>
  )
}