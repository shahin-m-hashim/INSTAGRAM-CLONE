import { cn } from "utils/cn";
import { useState } from "react";
import Footer from "components/Footer";
import HumanIcon from "icons/HumanIcon";
import EmailIcon from "icons/EmailIcon";
import CreatorIcon from "icons/CreatorIcon";
import Separator from "components/Separator";
import BusinessIcon from "icons/BusinessIcon";
import RadioInput from "components/RadioInput";
import Button from "components/wrappers/Button";
import MegaPhoneIcon from "icons/MegaPhoneIcon";
import GrowthToolsIcon from "icons/GrowthToolsIcon";
import CheckboxInput from "components/CheckboxInput";
import SearchField from "components/fields/SearchField";
import SimplifiedMessagingIcon from "icons/SimplifiedMessagingIcon";

const SelectACategory = () => (
  <div className="flex flex-col gap-4 text-center">
    <h1 className="text-3xl font-extrabold">Select a Category</h1>
    <p className="text-sm text-tertiary">
      Choose a category that best describes what you do. You&apos;ll have the
      option to display or hide this on your profile.
    </p>
    <div className="flex items-center gap-2">
      <CheckboxInput className="size-4" isRounded={false} />
      <span className="text-sm">Show category on profile</span>
    </div>

    <SearchField />

    <h1 className="text-lg underline text-bold underline-offset-4">
      Suggested
    </h1>

    <div className="flex flex-col gap-6 pr-4 overflow-y-auto">
      {[
        "Personal blog",
        "Product/service",
        "Art",
        "Musician/band",
        "Shopping & retail",
        "Health/beauty",
        "Grocery Store",
      ].map((lang, idx) => (
        <div key={idx} className="flex items-center justify-between">
          <span className={idx === 0 ? "text-primary" : "text-tertiary"}>
            {lang}
          </span>
          <RadioInput />
        </div>
      ))}
    </div>
  </div>
);

const Creator = () => (
  <div className="flex flex-col items-center gap-4">
    <div className="flex items-center justify-center p-4 border rounded-full">
      <CreatorIcon />
    </div>
    <h1 className="text-2xl font-bold">Creator</h1>
    <p>
      Best for public figures, content producers, artists and influencer&apos;s.
    </p>
    <Separator straight={true} />
    <div className="flex flex-col gap-4 my-2">
      <div className="flex items-center gap-6">
        <HumanIcon className="min-w-6 size-6" />
        <div className="flex flex-col flex-1 gap-1">
          <h1>Flexible Profile Controls</h1>
          <p className="text-sm text-tertiary">
            You can choose to hide or display contact info and buttons on your
            profile.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <SimplifiedMessagingIcon className="min-w-6 size-6" />
        <div className="flex flex-col flex-1 gap-1">
          <h1>Simplified Messaging</h1>
          <p className="text-sm text-tertiary">
            A new inbox makes it easier to manage message requests and connect
            with fans.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <GrowthToolsIcon className="min-w-6 size-6" />
        <div className="flex flex-col flex-1 gap-1">
          <h1>More Growth Tools</h1>
          <p className="text-sm text-tertiary">
            Get more advanced insights and reach more people with promotions.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Business = () => (
  <div className="flex flex-col items-center gap-4">
    <div className="flex items-center justify-center p-4 border rounded-full">
      <BusinessIcon />
    </div>
    <h1 className="text-2xl font-bold">Business</h1>
    <p className="text-sm text-center text-tertiary">
      Best for retailers, local businesses, brands, organizations and service
      providers.
    </p>
    <Separator straight={true} />
    <div className="flex flex-col gap-4 my-2">
      <div className="flex items-center gap-6">
        <GrowthToolsIcon className="min-w-6 size-6" />
        <div className="flex flex-col flex-1 gap-1">
          <h1>Learn about your followers</h1>
          <p className="text-sm text-tertiary">
            Get insights about your followers and see how your posts are
            performing.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <MegaPhoneIcon className="min-w-6 size-6" />
        <div className="flex flex-col flex-1 gap-1">
          <h1>Reach your customers</h1>
          <p className="text-sm text-tertiary">
            Create promotions on Instagram to reach more customers and build
            your business.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <EmailIcon className="min-w-6 size-6" />
        <div className="flex flex-col flex-1 gap-1">
          <h1>Get new contact options</h1>
          <p className="text-sm text-tertiary">
            Add a contact button to your profile to make it easier for people to
            get in touch with you.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function SwitchAccountsPage() {
  const [formData, setFormData] = useState({
    category: "",
    preferredAccountType: "",
    showChooseCategory: false,
    showCategoryOnProfile: false,
  });

  return (
    <main className="h-screen flex flex-col justify-between overflow-auto min-w-[320px] md:pt-0 pb-[50px] md:pb-0 md:pl-[80px] xl:pl-[250px] pt-[60px]">
      <div className="flex items-center justify-center flex-1 px-4 my-5">
        <div className="flex  flex-col border border-tertiary w-full max-w-[600px] rounded-lg">
          <div className="flex flex-col gap-4 p-6">
            {!formData.showChooseCategory &&
            formData.preferredAccountType === "creator" ? (
              <Creator />
            ) : !formData.showChooseCategory &&
              formData.preferredAccountType === "business" ? (
              <Business />
            ) : formData.showChooseCategory ? (
              <SelectACategory formData={formData} setFormData={setFormData} />
            ) : (
              <>
                <h1 className="text-2xl font-extrabold text-center">
                  Which Best Describes You?
                </h1>

                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      preferredAccountType: "creator",
                    }))
                  }
                  className="p-4 border rounded-xl border-tertiary"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center justify-center p-4 border rounded-full border-tertiary">
                      <CreatorIcon />
                    </div>
                    <h1 className="text-lg font-bold">Creator</h1>
                    <p className="text-xs text-tertiary">
                      Best for public figures,content producers, artists, and
                      influence&apos;s.
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      preferredAccountType: "business",
                    }))
                  }
                  className="p-4 border border-tertiary rounded-xl"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center justify-center p-4 border rounded-full border-tertiary">
                      <BusinessIcon />
                    </div>
                    <h1 className="text-lg font-bold">Business</h1>
                    <p className="text-xs text-tertiary">
                      Best for retailers, brands, organizations, and service
                      providers.
                    </p>
                  </div>
                </button>
              </>
            )}
          </div>

          <div
            className={cn(
              "flex items-center p-4 border-t border-tertiary",
              !formData.preferredAccountType && "hidden"
            )}
          >
            {formData.preferredAccountType && (
              <button
                onClick={() =>
                  formData.showChooseCategory
                    ? setFormData((prev) => ({
                        ...prev,
                        showChooseCategory: false,
                      }))
                    : setFormData((prev) => ({
                        ...prev,
                        preferredAccountType: "",
                      }))
                }
                className="flex items-center justify-center w-20 h-8 gap-2 p-2 text-sm font-semibold rounded-lg bg-button hover:bg-button-hover"
              >
                Back
              </button>
            )}

            {formData.preferredAccountType && !formData.showChooseCategory && (
              <Button
                onClick={() =>
                  setFormData((prev) => ({ ...prev, showChooseCategory: true }))
                }
                className="w-20 ml-auto"
              >
                Next
              </Button>
            )}

            {formData.showChooseCategory && (
              <Button
                className="w-20 ml-auto"
                disabled={
                  formData.preferredAccountType && formData.category
                    ? false
                    : true
                }
              >
                Submit
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="hidden mb-10 md:block">
        <Footer />
      </div>
    </main>
  );
}
