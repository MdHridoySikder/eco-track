import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayOut from "./LayOut/RootLayOut";
import Home from "./Pages/Home";
import Challenges from "./Pages/Challenges";

import AuthProvider from "./Context/AuthProvider";
import { ToastContainer } from "react-toastify";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ChallengesDetails from "./Pages/ChallengesDetails";

import PrivateRoute from "./PrivateRouter/PrivaateRoute";
import Update from "./Pages/Update";
import AddActivities from "./Pages/AddActivities";
import MyActivities from "./Pages/MyActivities/MyActivities";
import ErrorPage from "./Pages/ErrorPage";
import Loader from "./Component/Loader";
import RecentTips from "./Pages/RecentTips";

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
        loader: () => fetch("http://localhost:3000/challenges"),
      },
      {
        path: "/ChallengesDetails/:id",
        element: <ChallengesDetails />,
        loader: async ({ params }) => {
          const res = await fetch(
            `http://localhost:3000/challenges/${params.id}`,
          );
          if (!res.ok) {
            throw new Response("Not Found", { status: 404 });
          }
          return res.json();
        },
      },
      {
        path: "/add-activities",
        element: (
          <PrivateRoute>
            <AddActivities></AddActivities>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-activities",
        element: (
          <PrivateRoute>
            <MyActivities></MyActivities>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch(
            `http://localhost:3000/challenges/${params.id}`,
          );
          return res.json();
        },
      },

      {
        path: "/recentTips",
        element: <RecentTips></RecentTips>,
        loader: () => fetch("http://localhost:3000/tips"),
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },

      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router} fallbackElement={<Loader></Loader>} />

      <ToastContainer />
    </StrictMode>
  </AuthProvider>,
);
