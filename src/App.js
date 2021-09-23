import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import About from './components/About';

function App() {
  const [navOptions] = useState([
    { name: 'About Me'},
    { name: 'Portfolio'},
    { name: 'Resume'},
    { name: 'Contact Me'},
  ]);
  
  const [currentCategory, setCurrentCategory] = useState(navOptions[0]);
  const [pageSelected, setPageSelected] = useState(navOptions[0].name);
  
  return (
    <div>
      <Nav
        categories={navOptions}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}>
      </Nav>
      <main>
      {pageSelected === 'About Me' ? (
          <>
            <About></About>
          </>
        ) : (
          pageSelected === 'Portfolio' ? (
            <>
             <Portfolio/>
             </>
          ) :   pageSelected === 'Resume' ? (
            <>
             <Resume/>
             </>
          ) : 
          <>
          <ContactForm></ContactForm>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
