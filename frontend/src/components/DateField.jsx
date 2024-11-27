/* eslint-disable react/prop-types */

export default function DateField({
  date,
  handleChange,
  color = "white",
  background = "black",
  border = "1px solid gray",
}) {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from(
    { length: 106 },
    (_, i) => new Date().getFullYear() - i
  );

  return (
    <div className="flex flex-col w-full gap-3">
      <div className="flex justify-center gap-2">
        {/* Month Dropdown */}
        <select
          name="month"
          value={date.month}
          onChange={handleChange}
          style={{
            border,
            color,
            background,
          }}
          className="p-2 text-xs rounded-sm focus:outline-none"
        >
          <option value="">Month</option>
          {months.map((month, index) => (
            <option key={index} value={index + 1}>
              {month}
            </option>
          ))}
        </select>

        {/* Day Dropdown */}
        <select
          name="day"
          value={date.day}
          style={{
            border,
            color,
            background,
          }}
          onChange={handleChange}
          className="p-2 text-xs rounded-sm focus:outline-none"
        >
          <option value="">Day</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        {/* Year Dropdown */}
        <select
          name="year"
          value={date.year}
          style={{
            border,
            color,
            background,
          }}
          onChange={handleChange}
          className="p-2 text-xs rounded-sm focus:outline-none"
        >
          <option value="">Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <p className="text-sm text-rbg(168,168,168)">
        You need to enter the date you were born
      </p>
    </div>
  );
}
