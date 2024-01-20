import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Darkmode from './challenge/darkmode';
import Formvalidator from './challenge/formvalidator';
import Pixelart from './challenge/pixelart';
import Simplecalculator from './challenge/simpleclaculator';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Darkmode/>} />
          <Route path='/formvalidator' element={<Formvalidator/>} />
          <Route path='/pixelart' element={<Pixelart/>} />
          <Route path='/simplecalculator' element={<Simplecalculator/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}