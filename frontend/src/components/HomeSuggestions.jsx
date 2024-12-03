import Separator from "components/Separator";
import Button from "components/wrappers/Button";
import SearchField from "components/fields/SearchField";
import AccountsList from "components/lists/AccountsList";

export default function HomeSuggestions() {
  return (
    <div className="flex justify-center">
      <div className="xs:p-5 lg:w-1/2">
        <div className="flex items-center w-full pt-4 xs:pt-0">
          <div className="hidden xs:block">
            <img src="images/friend_suggestions.webp" />
          </div>
          <div className="flex-1 px-5">
            <p className="text-sm font-semibold xs:text-base">
              Find friends and accounts you like
            </p>
            <p className="text-xs xs:text-sm">
              Try following 5 or more accounts for a personalized experience.
            </p>
          </div>
          <div className="pr-4 w-14 xs:p-0">
            <Button>Next</Button>
          </div>
        </div>

        <div className="my-4">
          <Separator straight={true} />
        </div>

        <div className="flex flex-col w-full gap-5 px-5">
          <div className="h-10">
            <SearchField />
          </div>

          <AccountsList type="home" />
        </div>
      </div>
    </div>
  );
}
