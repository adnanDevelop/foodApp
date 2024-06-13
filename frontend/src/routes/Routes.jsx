import { Outlet, useRoutes } from "react-router-dom";
import { ProtectedRoute, PublicRoute } from "../utils/RouteAuth";

// Main Layout
import Layout from "../components/Layout";

// Protected Routes
import Home from "../modules/home/Home";
import Menu from "../modules/menu/Menu";
import Blog from "../modules/blog/Blog";
// import Cart from "../modules/checkout/Cart";
import Contact from "../modules/contact/Contact";
import NotFound from "../modules/404/NotFound";

// Public Routes
import Login from "../modules/auth/Login";
import Signup from "../modules/auth/Signup";

export const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "menu",
          element: <Menu />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
        // {
        //   path: "cart",
        //   element: <Cart />,
        // },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    {
      path: "/login",
      element: (
        <PublicRoute>
          <Outlet />
        </PublicRoute>
      ),
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
};
