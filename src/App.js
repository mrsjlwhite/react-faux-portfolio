import React, { useState } from 'react';
import './App.css';
import Nav from '../src/components/Nav';

function App() {
  const [navOptions] = useState([
    { name: 'About Me'},
    { name: 'Portfolio'},
    { name: 'Resume'},
    { name: 'Contact Me'},
  ]);
  
  const [currentCategory, setCurrentCategory] = useState(navOptions[0]);
  
  return (
    <div>
      <Nav
        categories={navOptions}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}>
      </Nav>
    </div>
  );
}

export default App;
