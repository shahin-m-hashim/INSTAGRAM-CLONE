import Separator from "components/Separator";
import RadioInput from "components/RadioInput";

export default function GroupedOptions({
  options,
  type = "simple",
  extendedOptions = ["Off", "From profiles I follow", "From everyone"],
}) {
  return (
    <>
      {type === "advanced" ? (
        <ul className="flex flex-col gap-4">
          {options.map((option, idx) => (
            <li key={idx} className="flex flex-col gap-6">
              <h1 className="font-bold">{option.heading}</h1>

              {option.type === "on/off" ? (
                <>
                  <div className="flex items-center gap-4">
                    <RadioInput id="on" />
                    <label htmlFor="on" className="text-sm">
                      On
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <RadioInput id="off" />
                    <label htmlFor="off" className="text-sm">
                      Off
                    </label>
                  </div>
                </>
              ) : (
                <>
                  {extendedOptions.map((option, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <RadioInput id={option} />
                      <label htmlFor={option} className="text-sm">
                        {option}
                      </label>
                    </div>
                  ))}
                </>
              )}

              {option.example && (
                <span className="text-xs text-[rgb(168,168,168)]">
                  {option.example}
                </span>
              )}

              {idx < options.length - 1 && <Separator straight={true} />}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="flex flex-col gap-4 border border-[rgb(54,54,54)] p-4 rounded-lg">
          {options.map((option, idx) => (
            <li key={idx} className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <label htmlFor={option} className="text-sm">
                  {option}
                </label>
                <RadioInput id={option} />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="off" className="text-sm">
                  Off
                </label>
                <RadioInput id="off" />
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
