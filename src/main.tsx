import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import darkerTheme from "./infrastructure/themes/darker";
const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkerTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
