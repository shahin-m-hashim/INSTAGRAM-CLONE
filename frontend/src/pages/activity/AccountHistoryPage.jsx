import IIcon from "icons/IIcon";
import EmailIcon from "icons/EmailIcon";
import Separator from "components/Separator";

export default function AccountHistoryPage() {
  return (
    <div className="flex flex-col flex-1 gap-2 p-6">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-sm font-bold">About account history</h1>

          <p className="text-sm text-[rgb(138,138,138)]">
            Review changes you&apos;ve made to your account since you created
            it.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-bold">Newest to oldest</span>
          <button className="border border-[rgb(54,54,54)] px-4 py-2 rounded-md text-sm font-bold">
            Sort & Filter
          </button>
        </div>
      </div>

      <Separator straight={true} />

      <div className="flex flex-col gap-4 px-4 py-2">
        <h1 className="font-semibold">Today</h1>
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <EmailIcon className="size-6" />
            <div>
              <span>Email</span>
              <p className="text-sm text-[rgb(168,168,168)]">
                Your changed your email address to{" "}
                <span className="font-semibold">example@gmail.com</span> 1h
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <IIcon className="size-6" />
            <div>
              <span>Account created</span>
              <p className="text-sm text-[rgb(168,168,168)]">
                Your account was created on{" "}
                <span className="font-semibold text-[rgb(138,138,138)]">
                  December 14, 2022
                </span>{" "}
                1h
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator straight={true} />
    </div>
  );
}
