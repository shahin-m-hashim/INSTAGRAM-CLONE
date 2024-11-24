import { useState } from "react";
import { cn } from "../../../utils/cn";
import AnimatedInputField from "../../AnimatedInputField";

export default function PasswordResetForm() {
  const [identifier, setIdentifier] = useState("");

  const handleSubmit = (e) => {
    setIdentifier("");
    e.preventDefault();
    console.log(identifier);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm md:w-[400px] md:border flex flex-col justify-between items-center md:border-[rgb(54,54,54)]"
    >
      <div className="flex flex-col justify-between flex-1 px-10 md:py-6">
        <div className="flex flex-col items-center">
          <img
            alt="lock-icon"
            src="icons/lock.svg"
            className="h-[95px] mb-2"
          ></img>
          <h1 className="mb-2 text-base font-semibold">Trouble logging in?</h1>
          <p className="text-center text-[rgb(168,168,168)] mb-3">
            Enter your email, phone, or username and we&apos;ll send you a link
            to get back into your account.
          </p>
          <AnimatedInputField
            value={identifier}
            setValue={setIdentifier}
            name="forgotPwdIdentifier"
            placeholder="Email, Phone, or Username"
          />
          <button
            type="submit"
            className={cn(
              "rounded-lg w-full h-8 bg-[rgb(0,149,246)] my-4",
              identifier ? "opacity-100" : "opacity-30"
            )}
          >
            Send login link
          </button>
          <div className="mb-6">
            <a className="text-xs">Can&apos;t reset your password?</a>
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-14">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex-1 border-t border-t-[#262626]"></div>
            <span className="text-[rgb(168,168,168)] font-semibold">OR</span>
            <div className="flex-1 border-t border-t-[#262626]"></div>
          </div>
          <div className="text-center">
            <a className="font-semibold hover:text-gray-400">
              Create new account
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full bg-[rgb(18,18,18)] rounded-b-sm h-11">
        <a className="font-semibold hover:text-gray-400">Back to Login</a>
      </div>
    </form>
  );
}
