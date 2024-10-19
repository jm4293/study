import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BoardList from "./pages/board-list/BoardList";
import BoardDetail from "./pages/board-detail/BoardDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardList />} />
        <Route path="/detail/:id" element={<BoardDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
