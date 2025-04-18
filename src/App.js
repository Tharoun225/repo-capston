import './App.css';
import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <NavBar/>
      <MainContent/>
      <Footer/>
    </>
  );
}

export default App;