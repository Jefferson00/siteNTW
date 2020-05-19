import React from 'react';
import Header from './header';
import Presentation from './pages/home/presentation'
import Highlight from './pages/home/highligtht'
import Institutional from './pages/home/institutional'
import Cases from './pages/home/cases'
import Partners from './pages/home/partners'
import Footer from './footer'
import Routes from './routes'
import './global.css';
import './responsive.css';

function App() {
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;