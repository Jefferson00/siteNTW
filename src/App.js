import React from 'react';
import Header from './header';
import Footer from './footer';
import Presentation from './pages/home/presentation.js'
import Highlight from './pages/home/highligtht.js'
import Institutional from './pages/home/institutional.js'
import Cases from './pages/home/cases.js'
import Partners from './pages/home/partners.js'

import './global.css'


function App() {
  return (
    <div className="App">
      <Header>
      </Header>
      
      <Presentation>
      </Presentation>
     
      <Highlight>
      </Highlight>

      <Institutional>
      </Institutional>

      <Cases>
      </Cases>

      <Partners>
      </Partners>

      <Footer>
      </Footer>
    </div>
  );

  
}



export default App;
