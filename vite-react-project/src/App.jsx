import { useState } from 'react';
import React from 'react';
import reactDOM from 'react-dom/client';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
    return (
    <>
      <Navbar/>
      <Main />
    </>
  )
}

export default App
