import React from "react";
import LayoutSidenav from '../AdminCP/S'
import {  Route, Routes } from 'react-router-dom';
import Dress from "../AdminCP/Dress";
import Accessoriess from "../AdminCP/Accessoriess";
import Bouquet from "../AdminCP/Bouquet";
import ACPRegister from "../AdminCP/ACPRgister";

const Admin=()=>{
return(

    <>
    <LayoutSidenav/>
      <Routes>
      <Route path="/Dress" element={<Dress/>} />
      <Route path="/Accessoriess" element={<Accessoriess/>} />
      <Route path="/Bouquet" element={<Bouquet/>} />
      <Route path="/ACPRegister" element={<ACPRegister/>} />

    </Routes>
    
    </>
)

}
export default Admin;