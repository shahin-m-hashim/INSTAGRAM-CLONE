import { useState } from "react";
import Button from "components/wrappers/Button";

export default function EmailConfirmationForm() {
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(code);
    setCode("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full gap-3 px-5 text-tertiary"
    >
      <input
        name="code"
        type="text"
        value={code}
        maxLength={8}
        placeholder="Confirmation Code"
        onChange={(e) => setCode(e.target.value)}
        className="border bg-tertiary focus:outline-none focus:border-[rgb(119,119,119)] border-secondary p-2 w-full rounded-md"
      />
      <Button type="submit" disabled={code.length < 6} className="text-white">
        Next
      </Button>
      <div className="w-full">
        <a className="font-semibold text-link-primary hover:text-link-primary-hover">
          Go Back
        </a>
      </div>
      {/* <p className="text-sm text-red-500">
        That code isn&apos;t valid. You can request a new one.
      </p> */}
    </form>
  );
}
