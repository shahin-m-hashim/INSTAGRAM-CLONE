import useForm from "hooks/useForm";
import LockIcon from "icons/LockIcon";
import { Link } from "react-router-dom";
import Button from "components/wrappers/Button";
import InputField from "components/fields/InputField";
import Separator from "components/Separator";

const initialField = {
  identifier: {
    value: "",
    label: "Email, Phone, or Username",
  },
};

export default function PasswordResetForm() {
  const { reset, fields, handleBlur, getFormData, handleChange, submitBtnRef } =
    useForm(initialField, false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = getFormData();
    console.log(formData);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-between rounded-md xs:border border-primary"
    >
      <div className="flex max-w-[380px] flex-col justify-between flex-1 px-8 py-6">
        <div className="flex flex-col items-center">
          <LockIcon />
          <h1 className="my-2 text-base font-semibold">Trouble logging in?</h1>
          <p className="mb-3 text-center text-secondary">
            Enter your email, phone, or username and we&apos;ll send you a link
            to get back into your account.
          </p>
          <InputField
            key={"identifier"}
            name={"identifier"}
            handleBlur={handleBlur}
            handleChange={handleChange}
            field={fields["identifier"]}
          />

          <Button
            type="submit"
            disabled={true}
            className="my-4"
            reference={submitBtnRef}
          >
            Send login link
          </Button>
          <div className="mb-6">
            <a className="text-xs">Can&apos;t reset your password?</a>
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-10">
          <Separator />
          <div className="text-center">
            <Link to="/accounts/signup" className="font-semibold">
              Create new account
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full text-button rounded-b-md bg-tertiary h-11">
        <Link to="/accounts/login" className="font-semibold">
          Back to Login
        </Link>
      </div>
    </form>
  );
}
