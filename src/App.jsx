import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./components/Home";
import { Places } from "./components/Places";
import { Contribute } from "./components/Contribute";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const route = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/places", element: <Places /> },
      { path: "/contribute", element: <Contribute /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={route} />);
