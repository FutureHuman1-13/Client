import React from 'react'
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home,About,Contact,Services} from "./Components/Navbar";
import Error from "./Error";
//only u have to import this on app.js


const FutureApp = () => {
  return (
    <>
   
    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default FutureApp;