/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import WorksPage from "./components/WorksPage/WorksPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import reportWebVitals from "./reportWebVitals";
import LandingPage from "./components/LandingPage/LandingPage";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <LandingPage /> }],
  },
  { path: "/products", element: <WorksPage /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
