import React from "react";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/header";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";
import { CoffeeContextProvider } from "./contexts/coffee_context";

function App() {

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <CoffeeContextProvider>
            <Router />
          </CoffeeContextProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
