import React from 'react';
import Sidebar from './components/Sidebar';
// import Dashboard from './components/Dashboard'
import Contect from './components/Contact.jsx';
import Grow from './components/Grow'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Routes>
        <Route path="/home" element={<Dashboard/>} />
        <Route path="/Contact" element={<Contect/>} />
        <Route path="/GrowWithUS" element={<Grow/>} />
      </Routes>
    </div>);
}

export default App;
