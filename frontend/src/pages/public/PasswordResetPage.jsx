import LockIcon from "icons/LockIcon";
import Footer from "components/Footer";
import { Link } from "react-router-dom";
import Separator from "components/Separator";
import PasswordResetForm from "components/forms/PasswordResetForm";

export default function PasswordResetPage() {
  return (
    <main className="flex flex-col overflow-auto h-screen min-w-[320px]">
      <div className="flex justify-center flex-1 xs:items-center md:mt-10 xs:px-8">
        <div className="flex w-full max-w-[400px] flex-col items-center justify-between rounded-md xs:border border-primary">
          <div className="flex flex-col items-center justify-center flex-1 px-8 py-6">
            <LockIcon />

            <h1 className="my-2 text-base font-semibold">
              Trouble logging in?
            </h1>

            <p className="mb-5 text-sm text-center text-tertiary">
              Enter your email, phone, or username and we&apos;ll send you a
              link to get back into your account.
            </p>

            <PasswordResetForm />

            <a className="text-xs text-link-secondary hover:text-link-secondary-hover">
              Can&apos;t reset your password?
            </a>
          </div>

          <div className="flex flex-col w-full gap-2 px-4 mb-10">
            <Separator />
            <div className="text-center">
              <Link to="/accounts/signup" className="font-semibold">
                Create new account
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center w-full border-t text-primary border-primary rounded-b-md bg-tertiary h-11">
            <Link to="/accounts/login" className="font-semibold">
              Back to Login
            </Link>
          </div>
        </div>
      </div>

      <div className="items-center justify-center hidden px-8 my-10 md:flex">
        <Footer />
      </div>
    </main>
  );
}
