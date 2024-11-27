import { useState } from "react";
import DateField from "../../DateField";
import Button from "../Button";

const initialDate = { day: "", month: "", year: "" };

export default function BDayForm() {
  const [date, setDate] = useState(initialDate);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDate((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { day, month, year } = date;
    const formattedDate = new Date(year, month - 1, day)
      .toISOString()
      .split("T")[0];

    console.log(JSON.stringify({ bday: formattedDate }));

    setDate(initialDate);
  };

  const isValid = date.day && date.month && date.year;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full text-[rgb(168,168,168)]"
    >
      <DateField
        date={date}
        color="rgb(168,168,168)"
        handleChange={handleChange}
        border="1px solid rgb(38,38,38)"
      />

      <p className="mt-5 mb-4">
        Use your own birthday, even if this account is for a business, a pet, or
        something else
      </p>

      <div className="md:px-5">
        <Button
          type="submit"
          disabled={!isValid}
          className="text-[rgb(255,255,255)] my-3"
        >
          Next
        </Button>
      </div>
    </form>
  );
}
