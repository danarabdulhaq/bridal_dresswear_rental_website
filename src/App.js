import './App.css';
import './components/Service';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Design from './components/Design';

function App() {
  return (


    <BrowserRouter>

    <Routes>

              <Route path='/' element={<Service/>}/>
              <Route index path='/Service' element ={<Service/>}/>

    </Routes>


</BrowserRouter>


  );
}

export default App;