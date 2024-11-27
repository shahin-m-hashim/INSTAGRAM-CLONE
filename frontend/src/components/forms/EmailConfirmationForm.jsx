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
      className="flex flex-col w-full gap-3 px-5 text-[rgb(168,168,168)]"
    >
      <input
        name="code"
        type="text"
        value={code}
        maxLength={8}
        placeholder="Confirmation Code"
        onChange={(e) => setCode(e.target.value)}
        className="border bg-[rgb(18,18,18)] focus:outline-none focus:border-[rgb(119,119,119)] border-[rgb(38,38,38)] p-2 w-full rounded-md"
      />
      <Button type="submit" disabled={code.length < 6} className="text-white">
        Next
      </Button>
      <div className="w-full">
        <a className="text-[rgb(0,149,246)] font-semibold">Go Back</a>
      </div>
      {/* <p className="text-sm text-red-500">
        That code isn&apos;t valid. You can request a new one.
      </p> */}
    </form>
  );
}
