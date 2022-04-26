import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MealsPage } from "./pages/MealsPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="meals">
            <Route index element={<MealsPage />} />
            <Route path=":id" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
