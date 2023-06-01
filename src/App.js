import React from 'react';
import './App.css';
import {Header,Footer} from './components/common';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
   <Header/>

   <Router>
    <Routes>
      <Route path="/" About >
        About
      </Route>
      <Route path="/portfolio">
        Portfolio  
      </Route>
    </Routes>
   </Router>
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <Footer/> 
    </div>
  );
}

export default App;
