import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useResetScroll(ref) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (ref.current) ref.current.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
