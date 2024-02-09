import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';

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
      </main>

    </div>
  );
};

export default App;