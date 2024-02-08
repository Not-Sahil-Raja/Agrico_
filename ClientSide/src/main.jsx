import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import Catlg from "./Components/Catalogue/Catlg.jsx";
import Homepage from "./Components/HomePage/Homepage.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import MarketPlace from "./Components/MarketPlace/MarketPlace.jsx";
import Login from "./Components/Login/Login.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Homepage /> },
      {
        path: "/catlg",
        element: <Catlg />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },

      {
        path: "/marketPlace",
        element: <MarketPlace />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
