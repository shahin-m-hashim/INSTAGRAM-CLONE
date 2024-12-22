import { lazy } from "react";

const ErrorPage = lazy(() => import("pages/ErrorPage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));
const LoginPage = lazy(() => import("pages/public/LoginPage"));
const SignUpPage = lazy(() => import("pages/public/SignUpPage"));
const PublicLayout = lazy(() => import("components/wrappers/PublicLayout"));
const PasswordResetPage = lazy(() => import("pages/public/PasswordResetPage"));

const publicRoutes = {
  path: "accounts",
  element: <PublicLayout />,
  errorElement: <ErrorPage />,
  children: [
    { path: "", element: <NotFoundPage /> },
    { path: "login", element: <LoginPage /> },
    { path: "signup", element: <SignUpPage /> },
    { path: "password/reset", element: <PasswordResetPage /> },
  ],
};

export default publicRoutes;
