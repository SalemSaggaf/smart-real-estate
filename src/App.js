import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SideMenu from "./components/SideMenu/SideMenu";
import AreaPickPage from "./pages/AreaPickPage/AreaPickPage";
import { useEffect } from "react";
import MainLayout from "./pages/MainLayout/MainLayout";
import AreaDetailsPage from "./pages/AreaDetailsPage/AreaDetailsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "areas",
        element: <AreaPickPage />,
      },
      {
        path: "areas/:areaId",
        element: <AreaDetailsPage />,
      }
    ]
  }

]);

function App() {
  return (

      <RouterProvider router={routes}></RouterProvider>

  );
}

export default App;
