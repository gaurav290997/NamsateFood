import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Header from "./components/Header";
import Body from "./components/Body";
import Restaurant from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header id="header" />

      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:id",
        element: <Restaurant />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
