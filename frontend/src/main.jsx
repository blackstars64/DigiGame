import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

import App from "./App";

import { getDigimons } from "./actions/digimon.action";
import Page from "./pages/Page";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Collection from "./pages/Collection";
import ScratchDigimon from "./pages/ScratchDigimon";
import DigiCrush from "./pages/DigiCrush";
import CommentSpace from "./pages/CommentSpace";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "/",
    element: <Page />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/collection",
        element: <Collection />,
      },
      {
        path: "/scratchDigimon",
        element: <ScratchDigimon />,
      },
      {
        path: "/digiCrush",
        element: <DigiCrush />,
      },
      {
        path: "/commentSpace",
        element: <CommentSpace />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

store.dispatch(getDigimons());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
