import { lazy } from "react";
import wait from "utils/wait";
import ErrorPage from "pages/ErrorPage";
import NotFoundPage from "pages/NotFoundPage";
import PublicLayout from "components/wrappers/PublicLayout";

const LoginPage = lazy(() => wait(300).then(() => import("pages/LoginPage")));
const SignUpPage = lazy(() => wait(300).then(() => import("pages/SignUpPage")));

const PasswordResetPage = lazy(() =>
  wait(300).then(() => import("pages/PasswordResetPage"))
);

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
