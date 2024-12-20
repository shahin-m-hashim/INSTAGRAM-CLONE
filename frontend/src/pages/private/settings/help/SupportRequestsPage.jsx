import Separator from "components/Separator";
import TransitionLink from "components/TransitionLink";
import DropDownArrowIcon from "icons/DropDownArrowIcon";
import NavigateBackBtn from "components/NavigateBackBtn";

export default function SupportRequestsPage() {
  return (
    <>
      <div className="items-center hidden gap-4 mb-5 -ml-2 md:flex">
        <NavigateBackBtn />
        <h1 className="text-2xl font-semibold">Support Requests</h1>
      </div>

      <div className="flex flex-col gap-3">
        <TransitionLink
          to="reports"
          className="flex items-center justify-between text-left"
        >
          <div className="flex flex-col items-start gap-2">
            <h2>Reports</h2>
            <p className="text-sm text-tertiary">
              These are reports you&apos;ve submitted.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-blue-500 rounded-full size-2" />
            <span className="text-tertiary">0</span>
            <div className="transform -rotate-90">
              <DropDownArrowIcon className="text-tertiary" />
            </div>
          </div>
        </TransitionLink>

        <Separator straight={true} />
      </div>

      <div className="flex flex-col gap-3">
        <TransitionLink
          to="safety_notices"
          className="flex items-center justify-between text-left"
        >
          <div className="flex flex-col items-start gap-2">
            <h2>Safety Notices</h2>
            <p className="text-sm text-tertiary">
              Find resources to help you recover from a difficult experience.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-blue-500 rounded-full size-2" />
            <span className="text-tertiary">0</span>

            <div className="transform -rotate-90">
              <DropDownArrowIcon className="text-tertiary" />
            </div>
          </div>
        </TransitionLink>

        <Separator straight={true} />
      </div>

      <div className="flex flex-col gap-3">
        <TransitionLink
          to="violations"
          className="flex items-center justify-between"
        >
          <div className="flex flex-col items-start gap-2 text-left">
            <h2>Violations</h2>
            <p className="text-sm text-tertiary">
              These are posts you&apos;ve shared that go against our guidelines.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-blue-500 rounded-full size-2" />
            <span className="text-tertiary">0</span>

            <div className="transform -rotate-90">
              <DropDownArrowIcon className="text-tertiary" />
            </div>
          </div>
        </TransitionLink>

        <Separator straight={true} />
      </div>
    </>
  );
}
