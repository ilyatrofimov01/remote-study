import React from "react";
import { Header } from "../Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "../Auth/Auth";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/auth" element={<Auth />}>
        </Route>
      </Routes>

    </BrowserRouter>
  );
};