import { useState } from 'react';
import './App.css';
import Header from './components/headerController';
import Footer from './components/footerController';
import Card from './components/cardController';
import Button from './components/buttonController';
function App() {

  return (
    <>
      <Header />
      <Card />
      <Footer />
    </>
  )
}

export default App
