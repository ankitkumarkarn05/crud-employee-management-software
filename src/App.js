import React from 'react';
import Create from './Components.js/Create';
import Read from './Components.js/Read';
import { Routes, Route } from 'react-router-dom'; 
import Update from './Components.js/Update';

const App = () => {
  return (
   
    <div className='container'>
      <Routes>
        <Route exact path="/" element= {<Read/> } ></Route>
        <Route exact path="/create" element= {<Create/>}></Route>
        <Route exact path='/update' element={<Update/>}></Route> 
      </Routes>
    </div>
  )
}

export default App;