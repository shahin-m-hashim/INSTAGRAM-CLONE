import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "providers/GlobalProvider";

export default function TransitionLink({ to = "", children, className = "" }) {
  const navigate = useNavigate();
  const { isPending, setActiveWidget, startTransition } =
    useContext(GlobalContext);

  const handleNavigation = (e) => {
    e.preventDefault();

    if (isPending) return;

    setActiveWidget(null);
    startTransition(() => navigate(e.currentTarget.getAttribute("href")));
  };

  return (
    <a className={className} href={to} onClick={handleNavigation}>
      {children}
    </a>
  );
}
