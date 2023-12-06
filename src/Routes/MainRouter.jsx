import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../components/Home";

function MainRouter() {
    const router = createBrowserRouter(
        createRoutesFromElements(
          <>
              <Route path="/*" element={<Home />} />
          </>
        )
    )
    return  <RouterProvider router={router} />;

}

export default MainRouter;
