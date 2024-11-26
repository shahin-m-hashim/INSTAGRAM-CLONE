import {
  validatePassword,
  validateUsername,
  validateIdentifier,
} from "../../../utils/validator";

import InputField from "../../InputField";
import useForm from "../../../hooks/useForm";

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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-3">
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
        <button
          type="submit"
          disabled={true}
          ref={submitBtnRef}
          className="mb-4 text-sm opacity-70 font-semibold rounded-lg flex items-center justify-center gap-2 p-2 h-8 bg-[rgb(0,149,246)]"
        >
          Sign up
        </button>
      </div>
    </form>
  );
}
