import { cn } from "../../utils/cn";
import useStore from "store/_store";
import { useShallow } from "zustand/shallow";

export default function InputField({
  id = "",
  label = "",
  fieldFor = "",
  type = "text",
  required = false,
  autoComplete = "on",
}) {
  const [
    value,
    error,
    showPassword,
    validationCompleted,
    setLoginFormFieldValue,
    validateSignupFormField,
    setSignupFormFieldValue,
    togglePasswordVisibility,
    setResetPasswordFormFieldValue,
  ] = useStore(
    useShallow((state) => [
      state.forms[fieldFor].fields[id].value,
      state.forms[fieldFor].fields[id].error,
      state.forms[fieldFor].showPassword,
      state.forms[fieldFor].fields[id].validationCompleted,
      state.setLoginFormFieldValue,
      state.validateSignupFormField,
      state.setSignupFormFieldValue,
      state.togglePasswordVisibility,
      state.setResetPasswordFormFieldValue,
    ])
  );

  const handleChange = (e) => {
    if (fieldFor === "login") {
      setLoginFormFieldValue(id, e.target.value);
    } else if (fieldFor === "signup") {
      setSignupFormFieldValue(id, e.target.value);
    } else if (fieldFor === "passwordReset") {
      setResetPasswordFormFieldValue(id, e.target.value);
    }
  };

  const handleBlur = (e) => {
    if (fieldFor === "signup" && required) {
      validateSignupFormField(id, e.target.value);
    }
  };

  return (
    <>
      <label htmlFor={id} className="relative w-full">
        <span
          className={cn(
            "pointer-events-none text-tertiary absolute inline-block left-2 transform transition-all duration-150 ease-in-out",
            value
              ? "text-[0.6rem] top-[2px]"
              : "text-xs -translate-y-1/2 top-1/2"
          )}
        >
          {label}
        </span>

        <input
          id={id}
          name={id}
          value={value}
          onBlur={handleBlur}
          onChange={handleChange}
          autoComplete={autoComplete}
          type={showPassword ? "text" : type}
          className={cn(
            value ? "pt-2" : "py-2",
            error ? "border-error" : "border-tertiary",
            "text-xs h-10 px-2 bg-transparent w-full rounded-sm focus:outline-none flex-1 border"
          )}
        />

        <div className="absolute top-0 bottom-0 right-2">
          <div className="inline-flex items-center h-full gap-2">
            {type === "password" && value && (
              <button
                type="button"
                onClick={() => togglePasswordVisibility(fieldFor)}
                className="text-sm font-semibold"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            )}

            {fieldFor === "signup" && validationCompleted && required && (
              <>
                {error ? (
                  <img width="20" src="icons/error_inp.svg" />
                ) : (
                  <img width="30" src="icons/correct_inp.svg" />
                )}
              </>
            )}
          </div>
        </div>
      </label>

      {error && (
        <p className="text-xs font-semibold text-left text-error">{error}</p>
      )}
    </>
  );
}
