import { useEffect } from "react";
import useStore from "store/_store";
import { useShallow } from "zustand/shallow";
import Separator from "components/Separator";
import Button from "components/wrappers/Button";
import { Link, useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import InputField from "components/fields/InputField";

const mockBackendLogin = async (data) => {
  return await new Promise((resolve) =>
    setTimeout(() => {
      console.log(data);
      resolve({ success: true });
    }, 3000)
  );
};

export default function LoginForm() {
  const navigate = useNavigate();

  const [
    error,
    isValid,
    getFormData,
    isSubmitting,
    resetFormSlice,
    setIsAuthenticated,
    setFormIsSubmitting,
  ] = useStore(
    useShallow((state) => [
      state.forms.login.error,
      state.forms.login.isValid,
      state.getFormData,
      state.forms.login.isSubmitting,
      state.resetFormSlice,
      state.setIsAuthenticated,
      state.setFormIsSubmitting,
    ])
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setFormIsSubmitting("login", true);
      const data = getFormData("login");
      mockBackendLogin(data).then((res) => {
        if (res.success) {
          resetFormSlice("login");
          setIsAuthenticated(true);
          navigate("/", { replace: true });
        } else {
          setFormIsSubmitting("login", false);
        }
      });
    }
  };

  useEffect(() => {
    return () => resetFormSlice("login");
  }, []);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="flex flex-col gap-1.5 mb-3">
        <InputField
          id="identifier"
          fieldFor="login"
          label="Phone number, username, or email"
        />
        <InputField
          id="password"
          type="password"
          fieldFor="login"
          label="Password"
        />
      </div>

      <Button
        type="submit"
        className="mb-4"
        disabled={!isValid || isSubmitting}
      >
        {isSubmitting ? (
          <RotatingLines strokeColor="white" strokeWidth="4" width="20" />
        ) : (
          "Log in"
        )}
      </Button>

      <Separator />

      <div className="flex flex-col items-center justify-center gap-4 mt-6 text-sm">
        <div className="flex gap-2">
          <img src="icons/facebook_round_blue.svg" alt="facebook" />
          <a className="font-semibold text-link-primary hover:text-link-primary-hover">
            Log in with Facebook
          </a>
        </div>

        {error && (
          <div className="text-center">
            <span className="text-error">
              Sorry, your password was incorrect. Please double-check your
              password.
            </span>
          </div>
        )}
        <Link to="/accounts/password/reset">Forgot password?</Link>
      </div>
    </form>
  );
}
