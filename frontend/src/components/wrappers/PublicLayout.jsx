import { Navigate, Outlet } from "react-router-dom";
import SplashScreen from "components/wrappers/SplashScreen";

export default function PublicLayout() {
  const isAuthenticated = true;

  return isAuthenticated ? (
    <Navigate to="/" replace />
  ) : (
    <SplashScreen>
      <section className="text-white bg-black scrollbar-dark">
        <Outlet />
      </section>
    </SplashScreen>
  );
}
