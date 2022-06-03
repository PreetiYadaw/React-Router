import React from "react";
import "./style.css";
import Login from "./components/Login"
import Content from "./components/Content"
import {BrowserRouter, Routes, Route} from "react-router-dom";
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/content" element={<Content/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
