import './App.css';
import About from './components/Pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (

<BrowserRouter>

        <Routes>

                  <Route path='/' element={<About/>}/>
                  <Route index path='/pages/About' element ={<About/>}/>

        </Routes>


</BrowserRouter>


  );
}

export default App;