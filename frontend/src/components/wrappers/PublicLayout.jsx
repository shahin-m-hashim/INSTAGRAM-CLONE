import useStore from "store/_store";
import restify from "utils/restify";
import { Navigate, Outlet } from "react-router-dom";

const wait = () => new Promise((resolve) => setTimeout(resolve, 300));

const resource = restify(wait());

export default function PublicLayout() {
  const isAuthenticated = useStore((state) => state.auth.isAuthenticated);

  resource.read();

  return isAuthenticated ? (
    <Navigate to="/" replace />
  ) : (
    <section className="bg-primary text-primary">
      <Outlet />
    </section>
  );
}
