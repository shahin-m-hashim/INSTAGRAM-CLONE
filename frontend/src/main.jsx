import "./index.css";
import App from "./App";
import { Suspense } from "react";
import ErrorPage from "pages/ErrorPage";
import { createRoot } from "react-dom/client";
import SplashScreen from "components/SplashScreen";
import { GlobalProvider } from "providers/GlobalProvider";
import ErrorBoundary from "components/wrappers/ErrorBoundary";

const theme = localStorage.getItem("theme") || "light";

document.documentElement.classList.add(`theme-${theme}`);

createRoot(document.getElementById("root")).render(
  <ErrorBoundary fallback={<ErrorPage />}>
    <Suspense fallback={<SplashScreen />}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Suspense>
  </ErrorBoundary>
);
