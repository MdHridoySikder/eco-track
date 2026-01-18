import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayOut from "./LayOut/RootLayOut";
import Home from "./Pages/Home";
import Challenges from "./Pages/Challenges";
import MyActivities from "./Pages/MyActivities";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut></RootLayOut>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/Home",
        element: <Home></Home>,
      },
      {
        path: "/challenges",
        element: <Challenges></Challenges>,
      },
      {
        path: "/my-activities",
        element: <MyActivities></MyActivities>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
