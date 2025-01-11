import useStore from "store/_store";
import { useShallow } from "zustand/shallow";
import RadioInput from "components/RadioInput";

export default function GenderSelectionDropDownMenu() {
  const [selectedOption, customGender, setEditProfileFormFieldValue] = useStore(
    useShallow((state) => [
      state.forms.editProfile.fields.gender,
      state.forms.editProfile.fields.customGender,
      state.setEditProfileFormFieldValue,
    ])
  );

  return (
    <div className="absolute right-0 z-20 top-14">
      <div className="flex flex-col w-[288px] xs:w-[320px] xs:gap-2 p-3 bg-widget rounded-xl">
        <div className="flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-widget-hover">
          <label htmlFor="female">Female</label>

          <RadioInput
            id="female"
            name="gender"
            value="female"
            isChecked={selectedOption === "female"}
            handleChange={() =>
              setEditProfileFormFieldValue("gender", "female")
            }
          />
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-widget-hover">
          <label htmlFor="male">Male</label>

          <RadioInput
            id="male"
            value="male"
            name="gender"
            isChecked={selectedOption === "male"}
            handleChange={() => setEditProfileFormFieldValue("gender", "male")}
          />
        </div>

        <div className="flex flex-col gap-5 p-3 rounded-lg cursor-pointer hover:bg-widget-hover">
          <div className="flex items-center justify-between ">
            <label htmlFor="custom">Custom</label>

            <RadioInput
              id="custom"
              name="gender"
              value="custom"
              isChecked={selectedOption === "custom"}
              handleChange={() =>
                setEditProfileFormFieldValue("gender", "custom")
              }
            />
          </div>

          <textarea
            id="customGender"
            name="customGender"
            value={customGender}
            onChange={(e) =>
              setEditProfileFormFieldValue("customGender", e.target.value)
            }
            className="w-full p-3 bg-transparent border rounded-md border-secondary"
          ></textarea>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-widget-hover">
          <label htmlFor="pnts">Prefer not to say</label>

          <RadioInput
            id="pnts"
            name="gender"
            value="prefer not to say"
            isChecked={selectedOption === "prefer not to say"}
            handleChange={() =>
              setEditProfileFormFieldValue("gender", "prefer not to say")
            }
          />
        </div>
      </div>
    </div>
  );
}
