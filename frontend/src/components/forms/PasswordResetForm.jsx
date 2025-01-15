import useStore from "store/_store";
import Button from "components/wrappers/Button";
import InputField from "components/fields/InputField";

export default function PasswordResetForm() {
  const identifier = useStore(
    (state) => state.forms.passwordReset.fields.identifier.value
  );

  return (
    <form className="flex flex-col items-center justify-between w-full">
      <InputField
        id="identifier"
        fieldFor="passwordReset"
        label="Email, Phone, or Username"
      />

      <Button disabled={!identifier} type="submit" className="my-4">
        Send login link
      </Button>
    </form>
  );
}
