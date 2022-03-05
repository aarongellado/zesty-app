import * as React from 'react';
import * as mui from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
