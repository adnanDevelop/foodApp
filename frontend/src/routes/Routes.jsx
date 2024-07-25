import { Outlet, useRoutes } from "react-router-dom";
import { ProtectedRoute, PublicRoute } from "../utils/RouteAuth";

// Main Layout
import Layout from "../components/Layout";

// Public Routes
import Login from "../modules/auth/Login";
import Signup from "../modules/auth/Signup";
import Profile from "../modules/profile/Profile";

// Protected Routes
import Home from "../modules/home/Home";
import Menu from "../modules/menu/Menu";
import Blog from "../modules/blog/Blog";
import Faq from "../modules/faq/Faq";
// import Cart from "../modules/checkout/Cart";
import Contact from "../modules/contact/Contact";
import NotFound from "../modules/404/NotFound";
import { useSelector } from "react-redux";

export const Routes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);

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
        {
          path: "faq",
          element: <Faq />,
        },
        {
          path: "/user-profile",
          element: <Profile />,
        },
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
      element: (
        <PublicRoute>
          <Outlet />
        </PublicRoute>
      ),
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};
