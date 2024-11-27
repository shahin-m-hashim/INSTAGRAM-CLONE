import { useState } from "react";
import DateField from "../../DateField";

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
      className="flex flex-col text-xs text-[rgb(168,168,168)]"
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

      <button
        type="submit"
        disabled={!isValid}
        style={{ opacity: isValid ? 1 : 0.7 }}
        className="mb-4 text-[rgb(255,255,255)] text-sm font-semibold rounded-lg flex items-center justify-center gap-2 p-2 h-8 bg-[rgb(0,149,246)]"
      >
        Next
      </button>
    </form>
  );
}
