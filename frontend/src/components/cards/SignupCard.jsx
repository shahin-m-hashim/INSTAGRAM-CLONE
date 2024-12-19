import { Link } from "react-router-dom";

export default function SignupCard() {
  return (
    <div className="flex justify-center w-full gap-1 xs:p-5 xs:border border-primary">
      <p>Don&apos;t have an account?</p>
      <Link
        to="/accounts/signup"
        className="font-semibold text-link hover:text-link-hover"
      >
        Sign up
      </Link>
    </div>
  );
}
