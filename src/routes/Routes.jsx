import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import SignUp from "../pages/Home/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import Dashboard from "../layouts/Dashboard";
import InstructorHome from "../pages/Dashboard/Instructor/InstructorHome/InstructorHome";
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClasses";
import UserHome from "../pages/Dashboard/User/UserHome/UserHome";
import SelectedClasses from "../pages/Dashboard/User/SelectedClasses/SelectedClasses";
import PaymentHistory from "../pages/Dashboard/User/PaymentHistory/PaymentHistory";
import EnrollClasses from "../pages/Dashboard/User/EnrollClasses/EnrollClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),

    children: [
      {
        path: "adminhome",
        element: <AdminHome />,
      },
      {
        path: "manageusers",
        element: <ManageUsers />,
      },
      {
        path: "manageclasses",
        element: <ManageClasses />,
      },
      // Instructor routes
      {
        path: "instructorhome",
        element: (
          // <AdminRoute>
          <InstructorHome />
          // </AdminRoute>
        ),
      },
      {
        path: "addclass",
        element: (
          // <AdminRoute>
          <AddClass />
          // </AdminRoute>
        ),
      },
      {
        path: "myclass",
        element: (
          // <AdminRoute>
          <MyClasses />
          // </AdminRoute>
        ),
      },
      // User routes
      {
        path: "userhome",
        element: <UserHome />,
      },
      {
        path: "selectedclass",
        element: <SelectedClasses />,
      },
      {
        path: "enrollclass",
        element: <EnrollClasses />,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory />,
      },
    ],
  },
]);

export default router;
