import "./index.css";
import App from "./App";
import ErrorPage from "pages/ErrorPage";
import { createRoot } from "react-dom/client";
import { GlobalProvider } from "providers/GlobalProvider";
import ErrorBoundary from "components/wrappers/ErrorBoundary";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary fallback={<ErrorPage />}>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </ErrorBoundary>
);
