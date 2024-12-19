import { Navigate, Outlet } from "react-router-dom";

export default function PublicLayout() {
  const isAuthenticated = true;

  return isAuthenticated ? (
    <Navigate to="/" replace />
  ) : (
    <section className="bg-primary text-primary">
      <Outlet />
    </section>
  );
}
