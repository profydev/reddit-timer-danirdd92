import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element="" />
          <Route path="search" element="" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
