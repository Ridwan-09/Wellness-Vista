import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <main>
        <div id="home">
          <Home></Home>
        </div>
      </main>

    </div>
  );
};

export default App;