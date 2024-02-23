import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./components/Home";
import { Destinations } from "./components/Destinations";
import { Contribute } from "./components/Contribute";
import Footer from "./components/Footer";
import { Destination } from "./components/Destination";
import destinationsContext from "./utils/destinationsContext";
import { useState } from "react";

const AppLayout = () => {
  const [destinations, setDestinations] = useState([]);

  return (
    <>
      <destinationsContext.Provider
        value={{ touristPlaces: destinations, setDestinations }}
      >
        <Header />
        <main className=" pt-16">
          <Outlet />
        </main>
        <Footer />
      </destinationsContext.Provider>
    </>
  );
};

const route = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Destinations /> },
      { path: "/destinations", element: <Destinations /> },
      { path: "/contribute", element: <Contribute /> },
      { path: "/destination/:desId", element: <Destination /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={route} />);
