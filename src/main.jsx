import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Project from "./Project/Project.jsx";
import { Provider } from "react-redux";
import { store } from "./Store/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Project />
    </BrowserRouter>
  </Provider>
);
