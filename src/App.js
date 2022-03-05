import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx';

const HatsPage = () => (
  <div>
    <h3> HATS PAGE</h3>
    <h4>h4 is not a real html tag is it. not sure. </h4>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hats" element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
