import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../Layout/MainLayout";
import Books from "../pages/Books";
import Cart from "../pages/Cart";
import Create from "../pages/Create";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
       
        path: "/books",
        element: <Books />,
      },
      {
      
        path: "/cart",
        element: <Cart />,
      },
      {
      
        path: "/create",
        element: <Create />,
      },
    ],
  },
]);
