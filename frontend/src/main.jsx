import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

import App from "./App";
import { getUsers } from "./actions/user.action";
import { getDigimons } from "./actions/digimon.action";
import Page from "./pages/Page";
import Home from "./pages/Home";

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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

store.dispatch(getUsers());
store.dispatch(getDigimons());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
