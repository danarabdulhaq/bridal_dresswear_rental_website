import './App.css';
import React from 'react';
import Design from './components/Design'; 
import Contact from './components/Contact'; 
//import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

<>
   <Design/>
   <Contact/>
  </>
   
);
}
 
export default App;



////////////////////////////////////////////////////////
/*function App() {
  return (
<BrowserRouter>
 <Routes>

          <Route path='/' element={<Design/>}/>
          <Route index path='/pages/About' element ={<Design/>}/>
          <Route path='/' element={<Contact/>}/>
          <Route index path='/pages/About' element ={<Contact/>}/>

 </Routes>
</BrowserRouter>

);
}*/