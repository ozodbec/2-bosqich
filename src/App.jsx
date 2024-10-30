import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import Home from "./pages/Home";
import Login from "./pages/Login";

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
      ],
    },
    {
      element: <Login />,
      path: "/login",
    },
  ]);
  return <RouterProvider router={routes} />;
}
