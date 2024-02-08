import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./routes/MainPage.jsx";
import NotFound from "./routes/NotFound.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import Characters from "./routes/Characters.jsx";
import CharacterDetail from "./routes/CharacterDetail.jsx";
import Comics from "./routes/Comics.jsx";
import ComicDetail from "./routes/ComicDetail.jsx";
import Email from "./routes/Email.jsx";
import Munhwa from "./routes/Munhwa.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "munhwa",
        element: <Munhwa />,
      },
      {
        path: "email",
        element: <Email />,
      },
      {
        path: "comics",
        element: <Comics />,
      },
      {
        path: "comics/:id",
        element: <ComicDetail />,
      },

      {
        path: "characters",
        element: <Characters />,
      },
      {
        path: "characters/:id",
        element: <CharacterDetail />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
