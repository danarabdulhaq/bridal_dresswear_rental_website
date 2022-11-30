import './App.css';
import React from 'react';
import Design from './components/Design'; 
import Contact from './components/Contact'; 
import Card from './components/Card';
//import footer
import Footer from './components/footer';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cal from './components/Calendar'
import CardDetails from './components/CardDetails';

function App() {
  return (

<>
   <Card/>
   <Design/>
   <Contact/>
   <Cal/>
   <CardDetails/>
   <Footer/>
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