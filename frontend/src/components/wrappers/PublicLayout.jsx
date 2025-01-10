import useStore from "store/_store";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicLayout() {
  const isAuthenticated = useStore((state) => state.auth.isAuthenticated);

  return isAuthenticated ? (
    <Navigate to="/" replace />
  ) : (
    <section className="bg-primary text-primary">
      <Outlet />
    </section>
  );
}
