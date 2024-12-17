import Separator from "components/Separator";
import NavigateBackBtn from "components/NavigateBackBtn";

export default function PrivacyAndSecurityPage() {
  return (
    <div className="flex flex-col gap-10 md:mt-14">
      <div className="items-center hidden gap-4 mb-5 -ml-2 md:flex">
        <NavigateBackBtn />
        <h1 className="text-xl font-semibold">Privacy and Security Help</h1>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h2 className="mb-3 font-bold">Managing your account</h2>
          <Separator straight={true} />
        </div>

        <span>Age requirements</span>
        <span>Account privacy</span>
        <span>Location sharing</span>
        <span>Two factor authentication</span>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h2 className="mb-3 font-bold">Customizing your experience</h2>
          <Separator straight={true} />
        </div>

        <span>Blocking accounts</span>
        <span>Removing followers</span>
        <span>Managing photos of you</span>
        <span>Filtering comments</span>
        <span>Turning comments off</span>
        <span>Deleting comments</span>
        <span>Choosing who can see your story</span>
        <span>Choosing who can reply to your story</span>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h2 className="mb-3 font-bold">
            Reporting content you don&apos;t like
          </h2>
          <Separator straight={true} />
        </div>

        <span>Reporting comments</span>
        <span>Reporting accounts or posts</span>
        <span>Reporting intimate images</span>
        <span>Removing contents from your explore</span>
        <span>Sensitive content screens</span>
      </div>
    </div>
  );
}
