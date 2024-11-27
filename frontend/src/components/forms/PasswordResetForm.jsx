import useForm from "hooks/useForm";
import LockIcon from "icons/LockIcon";
import Button from "components/wrappers/Button";
import InputField from "components/fields/InputField";

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
      className="rounded-sm  md:border flex flex-col justify-between items-center md:border-[rgb(54,54,54)]"
    >
      <div className="flex max-w-[380px] flex-col justify-between flex-1 px-8 md:py-6">
        <div className="flex flex-col items-center">
          <LockIcon />
          <h1 className="my-2 text-base font-semibold">Trouble logging in?</h1>
          <p className="text-center text-[rgb(168,168,168)] mb-3">
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
