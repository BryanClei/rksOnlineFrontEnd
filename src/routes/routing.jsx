import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../component/Login";
import Index from "../component/Index";
import Register from "../component/Register";
import PageIndex from "../component/pages/users/Index";

const router = createBrowserRouter(
  [
    {
      index: true,
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Index />,
      // children: [
      //   {
      //     path: "team",
      //     element: <Team />,
      //     loader: teamLoader,
      //   },
      // ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/user/index",
      element: <PageIndex />,
    },
  ],
  {
    basename: "/", // set the base URL to '/'
  }
);

export const RouterModule = () => {
  return <RouterProvider router={router} />;
};
