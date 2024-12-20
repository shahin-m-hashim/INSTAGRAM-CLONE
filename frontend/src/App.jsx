import ErrorPage from "pages/ErrorPage";
import NotFoundPage from "pages/NotFoundPage";
import publicRoutes from "routes/publicRoutes";
import privateRoutes from "routes/privateRoutes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  publicRoutes,
  privateRoutes,
  {
    path: "*",
    element: <NotFoundPage />,
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
