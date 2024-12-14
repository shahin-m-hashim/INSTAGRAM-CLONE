import "./index.css";
import App from "./App";
import ErrorPage from "pages/ErrorPage";
import { createRoot } from "react-dom/client";
import ErrorBoundary from "components/wrappers/ErrorBoundary";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary fallback={<ErrorPage />}>
    <App />
  </ErrorBoundary>

  // <StrictMode>
  //   <AuthProvider>
  //     <UserProvider>
  //       <StoriesProvider>
  //         <PostsProvider>
  //           <MessengerProvider>
  //             <RoutesProvider>
  //               <App />
  //             </RoutesProvider>
  //           </MessengerProvider>
  //         </PostsProvider>
  //       </StoriesProvider>
  //     </UserProvider>
  //   </AuthProvider>
  // </StrictMode>
);
