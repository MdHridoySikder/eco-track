import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayOut from "./LayOut/RootLayOut";
import Home from "./Pages/Home";
import Challenges from "./Pages/Challenges";
import MyActivities from "./Pages/MyActivities";
import AuthProvider from "./Context/AuthProvider";
import { ToastContainer } from "react-toastify";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ChallengesDetails from "./Pages/ChallengesDetails";

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
        path: "/my-activities",
        element: <MyActivities></MyActivities>,
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
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router} />,
      <ToastContainer />
    </StrictMode>
  </AuthProvider>,
);
