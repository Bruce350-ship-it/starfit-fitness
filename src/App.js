import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Personal, Pricing, Blog, Blog1, Blog2, Contact } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/boosting-metabolism" element={<Blog1 />} />
        <Route path="/unleashing-power" element={<Blog2 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;