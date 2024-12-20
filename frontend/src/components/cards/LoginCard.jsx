import { Link } from "react-router-dom";

export default function LoginCard() {
  return (
    <div className="flex justify-center gap-1 text-sm xs:p-5 xs:border border-primary">
      <p>Have an account?</p>
      <Link
        to="/accounts/login"
        className="font-semibold text-link-primary hover:text-link-primary-hover"
      >
        Log in
      </Link>
    </div>
  );
}
