import useStore from "store/_store";
import { useShallow } from "zustand/shallow";
import Button from "components/wrappers/Button";
import InputField from "components/fields/InputField";

const mockBackendSignup = async (data) => {
  return await new Promise((resolve) =>
    setTimeout(() => {
      console.log(data);
      resolve({
        success: true,
        data: {
          jwt: "secret_token",
        },
      });
    }, 3000)
  );
};

export default function SignUpForm() {
  const [
    error,
    isValid,
    getFormData,
    isSubmitting,
    resetFormSlice,
    setFormIsSubmitting,
  ] = useStore(
    useShallow((state) => [
      state.forms.signup.error,
      state.forms.signup.isValid,
      state.getFormData,
      state.forms.signup.isSubmitting,
      state.resetFormSlice,
      state.setFormIsSubmitting,
    ])
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setFormIsSubmitting("signup", true);
      const data = getFormData("signup");
      mockBackendSignup(data).then((res) => {
        if (res.success) {
          resetFormSlice("signup");
        } else {
          setFormIsSubmitting("signup", false);
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <InputField
          id="identifier"
          required={true}
          fieldFor="signup"
          label="Mobile Number or Email"
        />

        <InputField
          id="password"
          type="password"
          required={true}
          label="Password"
          fieldFor="signup"
        />

        <InputField id="fullName" fieldFor="signup" label="Full Name" />

        <InputField
          id="username"
          required={true}
          label="Username"
          fieldFor="signup"
        />
      </div>
      <div className="flex flex-col gap-4 text-xs">
        <p>
          <span className="text-tertiary">
            People who use our service may have uploaded your contact
            information to Instagram.
          </span>{" "}
          <a className="text-link-secondary hover:text-link-secondary-hover hover:underline">
            Learn More
          </a>
        </p>
        <p className="text-tertiary">
          <span>By signing up, you agree to our</span>{" "}
          <a className="text-link-secondary hover:text-link-secondary-hover hover:underline">
            Terms ,{" "}
          </a>{" "}
          <a className="text-link-secondary hover:text-link-secondary-hover hover:underline">
            Privacy Policy
          </a>{" "}
          <span>and</span>{" "}
          <a className="text-link-secondary hover:text-link-secondary-hover hover:underline">
            Cookies Policy
          </a>
          <span>.</span>
        </p>

        <Button
          type="submit"
          className="w-full"
          disabled={!isValid && !isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Sign up"}
        </Button>
      </div>

      {error && (
        <div className="text-center">
          <span className="text-error">
            Something went wrong. Please try again after some time.
          </span>
        </div>
      )}
    </form>
  );
}
