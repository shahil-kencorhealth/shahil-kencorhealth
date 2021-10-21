import Home from "../pages/Home";
// import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard";
// import Message from "../pages/Message";
import Login from "../pages/Login";
import PateientList from "../pages/PateientList";
import PatientView from "../pages/PatientView";

export const publicRoutes = [
  // {
  //   path: "/home",
  //   component: Home
  // },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/Error",
    component: ErrorPage
  }
];

export const privateRoutes = [
  {
    path: "/home",
    component: PateientList
  },
  // {
  //   path: "/message",
  //   component: Message
  // },
  {
    path: "/list",
    component: PateientList
  },
  {
    path: "/newPatient",
    component: PatientView
  }

];
