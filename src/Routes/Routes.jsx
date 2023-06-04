import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import DashBord from "../Layout/DashBord";
import MyCart from "../pages/DashBord/MyCart/MyCart";
import AllUsers from "../pages/DashBord/AllUsers/AllUsers";
import AddItem from "../pages/DashBord/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/DashBord/ManageItems/ManageItems";
import Payment from "../pages/DashBord/Payment/Payment";
import UserHome from "../pages/DashBord/UserHome/UserHome";
import AddminHome from "../pages/DashBord/AdminHome/AddminHome";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ],

  },
  {
    path: '/dashbord',
    element: <PrivateRoute><DashBord></DashBord></PrivateRoute>,
    children: [
      {
        path: 'userhome',
        element: <UserHome></UserHome>
      },
      {
        path: 'adminhome',
        element: <AdminRoute><AddminHome></AddminHome></AdminRoute>
      },
      {
        path: 'mycart',
        element: <MyCart></MyCart>
      },
      {
        path: 'allusers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'additem',
        element: <AdminRoute><AddItem></AddItem></AdminRoute>
      },
      {
        path: 'manageitems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      }
    ]
  }
]);