import { Link } from "react-router-dom";

export default function LoginCard() {
  return (
    <div className="text-sm xs:p-5 xs:border justify-center flex gap-1 border-[rgb(54,54,54)]">
      <p>Have an account?</p>
      <Link
        to="/accounts/login"
        className="text-[rgb(0,149,246)] font-semibold"
      >
        Log in
      </Link>
    </div>
  );
}
