import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Doctors from './components/Doctors';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <main>
        <div id="home">
          <Home></Home>
        </div>

        <div id='about'>
          <About></About>
        </div>

        <div id='services'>
          <Services></Services>
        </div>

        <div id='doctors'>
          <Doctors></Doctors>
        </div>
      </main>

    </div>
  );
};

export default App;