import { useState } from "react";
import { cn } from "../../../utils/cn";

const initialState = {
  identifier: {
    value: "",
    toggleAnimation: false,
  },
  password: {
    value: "",
    showValue: false,
    toggleAnimation: false,
    showPwdToggleTxt: false,
  },
  hasError: false,
  isDisabled: true,
};

export default function LoginForm() {
  // console.log("Rendering form");

  const [state, setState] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    setState(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:px-10 md:py-2 md:border flex flex-col justify-center md:border-[rgb(54,54,54)]"
    >
      <i className="self-center my-10 w-[175px] h-[50px] bg-cover bg-no-repeat bg-[url(https://static.cdninstagram.com/rsrc.php/v3/yv/r/KoLLpWDb4f6.png)]"></i>

      <label className="relative mb-2">
        <span
          className={cn(
            "absolute inline-block left-2 transform text-[rgb(168,168,168)] transition-all duration-150 ease-in-out",
            state.identifier.toggleAnimation
              ? "text-[0.7em] -translate-y-1 top-1"
              : "text-xs -translate-y-1/2 top-1/2"
          )}
        >
          Phone number, username, or email
        </span>
        <input
          name="identifier"
          style={{
            padding: state.identifier.toggleAnimation
              ? "0.625rem 0.625rem 0 0.45rem"
              : "0.625em",
          }}
          className="text-xs h-10 w-full rounded-sm focus:outline-none flex-1 border-[rgb(85,85,85)] text-[rgb(245,245,245)] border bg-[rgb(18,18,18)]"
          value={state.identifier.value}
          onChange={(e) => {
            setState({
              ...state,
              identifier: {
                ...state.identifier,
                value: e.target.value,
                toggleAnimation: e.target.value.length > 0 ? true : false,
              },
              isDisabled:
                state.password.value && e.target.value.length > 0
                  ? false
                  : true,
            });
          }}
        />
      </label>

      <label className="relative mb-4">
        <span
          className={cn(
            "absolute inline-block left-2 transform text-[rgb(168,168,168)] transition-all duration-150 ease-in-out",
            state.password.toggleAnimation
              ? "text-[0.7em] -translate-y-1 top-1"
              : "text-xs -translate-y-1/2 top-1/2"
          )}
        >
          Password
        </span>
        <input
          name="password"
          style={{
            padding: state.password.toggleAnimation
              ? "0.625rem 0.625rem 0 0.45rem"
              : "0.625em",
          }}
          type={state.password.showValue ? "text" : "password"}
          className="text-xs h-10 w-full rounded-sm  focus:outline-none flex-1 border-[rgb(85,85,85)] text-[rgb(245,245,245)] border bg-[rgb(18,18,18)]"
          value={state.password.value}
          onChange={(e) =>
            setState({
              ...state,
              password: {
                ...state.password,
                value: e.target.value,
                toggleAnimation: e.target.value.length > 0 ? true : false,
                showPwdToggleTxt: e.target.value.length > 0 ? true : false,
              },
              isDisabled:
                state.identifier.value && e.target.value.length > 5
                  ? false
                  : true,
            })
          }
        />

        {state.password.value.length > 0 && (
          <button
            type="button"
            onClick={() =>
              setState((prevState) => ({
                ...prevState,
                password: {
                  ...prevState.password,
                  showValue: !prevState.password.showValue,
                },
              }))
            }
            className="absolute font-semibold transform -translate-y-1/2 top-1/2 right-2"
          >
            {state.password.showValue ? "Hide" : "Show"}
          </button>
        )}
      </label>

      <button
        type="submit"
        className={cn(
          "mb-4 rounded-lg h-8 bg-[rgb(0,149,246)]",
          state.isDisabled ? "opacity-70" : "opacity-100"
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
        {state.hasError && (
          <div className="text-center">
            <span className="text-red-500">
              Sorry, your password was incorrect. Please double-check your
              password.
            </span>
          </div>
        )}
        <a>Forgot password?</a>
      </div>
    </form>
  );
}
