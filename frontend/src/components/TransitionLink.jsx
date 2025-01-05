import { useContext } from "react";
import useStore from "store/_store";
import { useNavigate } from "react-router-dom";
import GlobalContext from "providers/GlobalProvider";

export default function TransitionLink({ to = "", children, className = "" }) {
  const { resetUiSlice } = useStore();

  const navigate = useNavigate();
  const { isPending, startTransition } = useContext(GlobalContext);

  const handleNavigation = (e) => {
    e.preventDefault();

    if (isPending) return;

    startTransition(() => {
      resetUiSlice();
      navigate(e.currentTarget.getAttribute("href"));
    });
  };

  return (
    <a className={className} href={to} onClick={handleNavigation}>
      {children}
    </a>
  );
}
