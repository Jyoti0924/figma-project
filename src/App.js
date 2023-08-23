import React from "react";
import Home from "./components/Home";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
   
    <Routes>
      <Route exact path="/"  element={<Home/>} />
      <Route  path="/form"  element={<Form/>} />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
