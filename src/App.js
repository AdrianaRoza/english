import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Form from './pages/Form';
import Words from './pages/Words'


import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="words" element={<Words/>} />
          <Route path="form" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
