import Separator from "components/Separator";
import Button from "components/wrappers/Button";
import SignUpForm from "components/forms/SignUpForm";
import InstagramTextIcon from "icons/InstagramTextIcon";

export default function SignupContent() {
  return (
    <>
      <InstagramTextIcon className="scale-[1.3]" />

      <p className="text-base font-semibold text-tertiary">
        Sign up to see photos and videos from your friends.
      </p>

      <Button>
        <img width={20} alt="facebook-logo" src="icons/fb_square_white.svg" />
        <span>Log in with Facebook</span>
      </Button>

      <div className="w-full my-1">
        <Separator />
      </div>

      <SignUpForm />
    </>
  );
}
