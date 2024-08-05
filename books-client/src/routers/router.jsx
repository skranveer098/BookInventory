import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Home from "../home/House.jsx";
// import Blog from "../components/Blog";
import About from "../components/About";
import Shop from "../shop/Shop";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";
import EditBooks from "../dashboard/EditBooks.jsx";
import ManageBooks from "../dashboard/ManageBooks.jsx";
// import Sidebar from "../dashboard/Sidebar.jsx";
import UploadBook from "../dashboard/UploadBook.jsx";
import Signup from "../components/Signup.jsx";
import Login from "../components/Login.jsx";
import Privateroute from "../PrivateRoute/Privateroute.jsx";
import Logout from "../components/Logout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) =>
          fetch(
            `https://book-inventory-kappa.vercel.app/api/book/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <Privateroute>
            <Dashboard />
          </Privateroute>
        ),
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />,
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks />,
        loader: ({ params }) =>
          fetch(
            `https://book-inventory-kappa.vercel.app/api/book/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);

export default router;
