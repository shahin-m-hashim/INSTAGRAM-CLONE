import Separator from "components/Separator";
import Button from "components/wrappers/Button";
import SignUpForm from "components/forms/SignUpForm";
import InstagramTextIcon from "icons/InstagramTextIcon";

export default function SignupContent() {
  return (
    <>
      <InstagramTextIcon className="text-white scale-[1.5]" />

      <p className="text-[rgb(168,168,168)] font-semibold text-base">
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
