import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../Header";
import { Auth } from "../Auth";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";


export const App = () => {
  const user = useSelector((state: RootState) => state.user);
  console.log(user);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/auth" element={<Auth />}>
        </Route>
      </Routes>
    </div>
  );
};