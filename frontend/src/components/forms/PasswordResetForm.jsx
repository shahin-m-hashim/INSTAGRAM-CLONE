import useForm from "hooks/useForm";
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
      className="flex flex-col items-center justify-between w-full"
    >
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
    </form>
  );
}
