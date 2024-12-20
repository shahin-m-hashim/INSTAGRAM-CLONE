import useForm from "hooks/useForm";
import Button from "components/wrappers/Button";
import InputField from "components/fields/InputField";

import {
  validatePassword,
  validateUsername,
  validateIdentifier,
} from "utils/validator";

export default function SignUpForm() {
  const { reset, fields, handleBlur, getFormData, handleChange, submitBtnRef } =
    useForm({
      identifier: {
        validator: validateIdentifier,
        label: "Mobile Number or Email",
      },
      password: {
        type: "password",
        label: "Password",
        validator: validatePassword,
      },
      fName: {
        required: false,
        label: "First name",
      },
      username: {
        label: "Username",
        validator: validateUsername,
      },
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = getFormData();
    console.log(formData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        {Object.keys(fields).map((field) => (
          <InputField
            key={field}
            name={field}
            field={fields[field]}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        ))}
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
          disabled={true}
          className="w-full"
          reference={submitBtnRef}
        >
          Sign up
        </Button>
      </div>
    </form>
  );
}
