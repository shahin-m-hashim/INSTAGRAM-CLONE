import Separator from "../Separator";
import InputField from "../../InputField";
import useForm from "../../../hooks/useForm";
import Button from "../Button";

const initialFields = {
  identifier: {
    value: "",
    label: "Phone number, username, or email",
  },
  password: {
    value: "",
    type: "password",
    label: "Password",
  },
};

export default function LoginForm() {
  // console.log("Rendering form");

  const { reset, fields, handleBlur, getFormData, handleChange, submitBtnRef } =
    useForm(initialFields);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = getFormData();
    console.log(formData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="flex flex-col gap-1.5 mb-3">
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

      <Button
        type="submit"
        disabled={true}
        className="mb-4"
        reference={submitBtnRef}
      >
        Log In
      </Button>

      <Separator />

      <div className="flex flex-col items-center justify-center gap-4 mt-6 text-sm">
        <div className="flex gap-2">
          <img src="icons/facebook_round_blue.svg" alt="facebook" />
          <a className=" text-[rgb(0,149,246)] hover:text-white font-semibold">
            Log in with Facebook
          </a>
        </div>
        {/* <div className="text-center">
          <span className="text-red-500 ">
            Sorry, your password was incorrect. Please double-check your
            password.
          </span>
        </div> */}
        <a>Forgot password?</a>
      </div>
    </form>
  );
}
