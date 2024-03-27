import React from "react";
import { ToastContainer } from "react-toastify";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

import App from "./App";
import "react-toastify/dist/ReactToastify.css";

import { getDigimons } from "./actions/digimon.action";
import Page from "./pages/Page";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Collection from "./pages/Collection";
import ScratchDigimon from "./pages/ScratchDigimon";
import AdminPanel from "./pages/AdminPanel";
import { getAllUsers } from "./actions/allUsers.action";
import { getFullUsers } from "./actions/fullUsers.action";
import { getFullDigimons } from "./actions/fullDigimon.action";
import { ScratchPercentProvider } from "./contexts/scratchedPercentContext";
import { DigimonScratchProvider } from "./contexts/digimonScratchContext";
import { getMessages } from "./actions/message.action";
import CommentSpace from "./pages/CommentSpace";
import Page404 from "./pages/Page404";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "/adminPanel",
    element: <AdminPanel />,
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
        path: "/commentSpace",
        element: <CommentSpace />,
      },
    ],
  },
  {
    path: "/*",
    element: <Page404 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

store.dispatch(getDigimons());
store.dispatch(getAllUsers());
store.dispatch(getFullUsers());
store.dispatch(getFullDigimons());
store.dispatch(getMessages());
const fetchMessages = () => {
  setInterval(() => {
    store.dispatch(getMessages());
  }, 20000);
};

fetchMessages();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DigimonScratchProvider>
        <ScratchPercentProvider>
          <RouterProvider router={router} />
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </ScratchPercentProvider>
      </DigimonScratchProvider>
    </Provider>
  </React.StrictMode>
);
