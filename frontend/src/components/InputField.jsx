/* eslint-disable react/prop-types */
import { cn } from "../utils/cn";
import { memo, useState } from "react";

const InputField = memo(function InputField({
  name,
  field,
  handleBlur,
  handleChange,
}) {
  const [showValue, setShowValue] = useState(false);

  return (
    <>
      <label htmlFor={name} className="relative w-full">
        <span
          className={cn(
            "pointer-events-none absolute inline-block left-2 transform text-[rgb(168,168,168)] transition-all duration-150 ease-in-out",
            field.value
              ? "text-[0.6rem] top-[2px]"
              : "text-xs -translate-y-1/2 top-1/2"
          )}
        >
          {field.label}
        </span>
        <input
          id={name}
          name={name}
          onBlur={handleBlur}
          onChange={handleChange}
          value={field.value || ""}
          autoComplete={field.autoComplete || "on"}
          type={
            field.type === "password" && showValue
              ? "text"
              : field.type || "text"
          }
          className={cn(
            field.value ? "pt-2" : "py-2",
            field.error ? "border-red-600" : "border-[rgb(85,85,85)]",
            "text-xs h-10 px-2 w-full rounded-sm focus:outline-none flex-1 text-[rgb(245,245,245)] border bg-[rgb(18,18,18)]"
          )}
        />

        <div className="absolute top-0 bottom-0 right-2">
          <div className="inline-flex items-center h-full gap-1">
            {field.showIcon && (
              <>
                {field.error ? (
                  <img width="20" src="icons/error_inp.svg" />
                ) : (
                  <img width="30" src="icons/correct_inp.svg" />
                )}
              </>
            )}
            {field.type === "password" && field.value && (
              <button
                type="button"
                className="text-sm font-semibold"
                onClick={() => setShowValue((prev) => !prev)}
              >
                {showValue ? "Hide" : "Show"}
              </button>
            )}
          </div>
        </div>
      </label>
      {field.error && (
        <p className="text-xs font-semibold text-left text-red-600">
          {field.error}
        </p>
      )}
    </>
  );
});

export default InputField;
