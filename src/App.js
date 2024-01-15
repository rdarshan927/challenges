import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Darkmode from './challenge/darkmode';
import Formvalidator from './challenge/formvalidator';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Darkmode/>} />
          <Route path='/formvalidator' element={<Formvalidator/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}