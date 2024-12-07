import RadioInput from "components/RadioInput";

export default function GenderFormWidget() {
  return (
    <div className="absolute right-0 z-20 top-14">
      <div className="flex flex-col w-[320px] gap-2 p-3 bg-[rgb(38,38,38)] rounded-xl">
        <div className="flex items-center justify-between gap-5 p-3 hover:bg-[rgb(68,68,68)] rounded-lg cursor-pointer">
          <span>Female</span>
          <RadioInput name="gender" value="female" />
        </div>

        <div className="flex items-center justify-between gap-5 p-3 hover:bg-[rgb(68,68,68)] rounded-lg cursor-pointer">
          <span>Male</span>
          <RadioInput name="gender" value="male" />
        </div>

        <div className="flex flex-col gap-5 p-3 hover:bg-[rgb(68,68,68)] rounded-lg cursor-pointer">
          <div className="flex items-center justify-between gap-5">
            <span>Custom</span>
            <RadioInput name="gender" value="custom" />
          </div>
          <textarea className="w-full rounded-lg bg-[rgb(18,18,18)] p-3"></textarea>
        </div>

        <div className="flex items-center justify-between gap-5 p-3 hover:bg-[rgb(68,68,68)] rounded-lg cursor-pointer">
          <span>Prefer not to say</span>
          <RadioInput
            name="gender"
            isChecked={true}
            value="prefer not to say"
          />
        </div>
      </div>
    </div>
  );
}
