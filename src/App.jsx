import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cards from "./pages/Cards";
import CreateArticle from "./pages/CreateArticle";

export default function App() {
  const user = false;
  const routes = createBrowserRouter([
    {
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          element: <CreateArticle />,
          path: "/createArticle",
        },
      ],
    },
    {
      element: <Login />,
      path: "/login",
    },
    {
      element: <Register />,
      path: "/register",
    },
    {
      element: <Cards />,
      path: "/cards",
    },
  ]);
  return <RouterProvider router={routes} />;
}
