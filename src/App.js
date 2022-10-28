import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery/dist/jquery.slim'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.min'
import './index.css';
import './style.css';
import './custom.css';
import './App.css';
import Header from './page/header'
import Footer from './page/footer';
import Main from './page/main'
import React, { useState, useEffect } from 'react';
function App() {
  const [stickyClass, setStickyClass] = useState('');
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500 ? setStickyClass('scrolled awake') : setStickyClass('');
    }
  };
  return (
    <div className="App">
      <div className="list-inner"  >
        <Header isScrolled={stickyClass} />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
