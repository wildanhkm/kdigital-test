import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
};

export default MyRoutes;
