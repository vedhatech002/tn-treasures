import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";

const AppLayout = () => {
  return (
    <>
      <Header />
    </>
  );
};

const route = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={route} />);
