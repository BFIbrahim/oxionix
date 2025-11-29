import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            path: '/',
            Component: Home
        }
    ]
  },
]);