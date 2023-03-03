import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartPage } from "./pages/Cart";
import { HomePage } from "./pages/Home";
import { LayoutPage } from "./pages/Layout";

export function Router() {
    return (
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    );
}