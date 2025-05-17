import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Service from "../Pages/Service";
import About from "../Pages/About";
import Vehicles from "../Pages/Vehicles";
import Contact from "../Pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children:[
        {
            index:true,
            path:"/",
            Component:Home
        },
        {
            path:"/service",
            Component:Service
        },
        {
            path:"/about",
            Component:About
        },
        {
            path:"/vehicles",
            Component:Vehicles
        },
        {
            path:"/contact",
            Component:Contact
        },
    ]
  },
]);
