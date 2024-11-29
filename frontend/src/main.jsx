import "./index.css";
import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <App />
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
