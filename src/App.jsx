import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import News from "./pages/News";
import Navbar from './components/Navbar'
import './App.css'

function App() {
  useEffect(() => {
    document.title = "Invex";
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
