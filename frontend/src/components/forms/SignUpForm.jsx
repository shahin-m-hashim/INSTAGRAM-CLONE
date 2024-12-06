import useForm from "hooks/useForm";
import Button from "components/wrappers/Button";
import InputField from "components/fields/InputField";

import {
  validateIdentifier,
  validatePassword,
  validateUsername,
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
          <span className="text-[rgb(168,168,168)]">
            People who use our service may have uploaded your contact
            information to Instagram.
          </span>{" "}
          <a className="text-white">Learn More</a>
        </p>
        <p className="text-[rgb(168,168,168)]">
          <span>By signing up, you agree to our</span>{" "}
          <a className="text-white">Terms , </a>{" "}
          <a className="text-white">Privacy Policy</a> <span>and</span>{" "}
          <a className="text-white">Cookies Policy</a>
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
