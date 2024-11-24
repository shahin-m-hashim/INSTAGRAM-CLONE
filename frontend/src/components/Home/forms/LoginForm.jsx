import { useState } from "react";
import { cn } from "../../../utils/cn";
import AnimatedInputField from "../../AnimatedInputField";

export default function LoginForm() {
  // console.log("Rendering form");

  const [password, setPassword] = useState("");
  const [identifier, setIdentifier] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(identifier, password);
  };

  const isDisabled = !(identifier && password && password.length > 5);

  return (
    <form
      onSubmit={handleSubmit}
      className="md:px-10 md:py-2 md:border flex flex-col justify-center md:border-[rgb(54,54,54)]"
    >
      <i className="self-center my-10 w-[175px] h-[50px] bg-cover bg-no-repeat bg-[url(https://static.cdninstagram.com/rsrc.php/v3/yv/r/KoLLpWDb4f6.png)]"></i>

      <div className="flex flex-col gap-2 mb-3">
        <AnimatedInputField
          name="identifier"
          value={identifier}
          setValue={setIdentifier}
          placeholder="Phone number, username, or email"
        />

        <AnimatedInputField
          name="password"
          value={password}
          type="password"
          setValue={setPassword}
          placeholder="Password"
        />
      </div>

      <button
        type="submit"
        className={cn(
          isDisabled ? "opacity-70" : "opacity-100",
          "mb-4 rounded-lg h-8 bg-[rgb(0,149,246)]"
        )}
      >
        Log In
      </button>
      <div className="flex items-center justify-center mb-6 space-x-2">
        <div className="flex-1 border-t border-t-[#262626]"></div>
        <span className="text-xs text-[rgb(168,168,168)] font-semibold">
          OR
        </span>
        <div className="flex-1 border-t border-t-[#262626]"></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex gap-2">
          <img src="icons/facebook.svg" alt="facebook" />
          <a className="text-[rgb(0,149,246)] hover:text-white font-semibold">
            Log in with Facebook
          </a>
        </div>
        {/* <div className="text-center">
            <span className="text-red-500">
              Sorry, your password was incorrect. Please double-check your
              password.
            </span>
          </div> */}
        <a>Forgot password?</a>
      </div>
    </form>
  );
}
