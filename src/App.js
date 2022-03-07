import * as React from 'react';
import Home from './container/homePage'
import About from './container/aboutPage';
import { Routes, Route, Link, } from "react-router-dom";
import Nav from './component/Nav'
function App() {
  return (
    <div>
      <Nav>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='about' element={<About></About>} />
        </Routes>
      </Nav>
    </div>
  );
}

export default App;
