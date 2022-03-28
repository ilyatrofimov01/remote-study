import React from "react";
import { Header } from "../Header";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};