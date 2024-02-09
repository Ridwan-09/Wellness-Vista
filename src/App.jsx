import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

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
      </main>

    </div>
  );
};

export default App;