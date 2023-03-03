import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartPage } from "./pages/Cart";
import { HomePage } from "./pages/Home";
import { LayoutPage } from "./pages/Layout";
import { RealizedOrder } from "./pages/RealizedOrder";

export function Router() {
    return (
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/finished" element={<RealizedOrder />} />
        </Route>
      </Routes>
    );
}