import ErrorPage from "pages/ErrorPage";
import NotFoundPage from "pages/NotFoundPage";
import protectedRoutes from "routes/protectedRoutes";
import publicRoutes from "routes/publicRoutes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  publicRoutes,
  protectedRoutes,
  {
    path: "*",
    element: <NotFoundPage />,
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
