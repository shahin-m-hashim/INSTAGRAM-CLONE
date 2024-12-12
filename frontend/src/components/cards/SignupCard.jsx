import { Link } from "react-router-dom";

export default function SignupCard() {
  return (
    <div className="w-full xs:p-5 xs:border justify-center flex gap-1 border-[rgb(54,54,54)]">
      <p>Don&apos;t have an account?</p>
      <Link
        to="/accounts/signup"
        className="text-[rgb(0,149,246)] font-semibold"
      >
        Sign up
      </Link>
    </div>
  );
}
