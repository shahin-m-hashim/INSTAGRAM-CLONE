import Footer from "components/Footer";
import Separator from "components/Separator";
import Button from "components/wrappers/Button";
import LinksCard from "components/cards/LinksCard";
import LoginCard from "components/cards/LoginCard";
import SignUpForm from "components/forms/SignUpForm";
import InstagramTextIcon from "icons/InstagramTextIcon";
import SplashScreen from "components/wrappers/SplashScreen";

export default function SignUpPage() {
  return (
    <SplashScreen>
      <section className="text-white bg-black scrollbar-dark">
        <main className="overflow-auto h-screen min-w-[320px]">
          <div className="flex items-center justify-center px-8 my-10">
            <div className="flex flex-col gap-2 w-[300px] xs:w-[400px]">
              <div className="items-center text-center gap-4 xs:px-10 xs:py-8 xs:border flex flex-col justify-center border-[rgb(54,54,54)]">
                <InstagramTextIcon className="text-white scale-[1.5]" />

                <p className="text-[rgb(168,168,168)] font-semibold text-base">
                  Sign up to see photos and videos from your friends.
                </p>

                <Button>
                  <img
                    width={20}
                    alt="facebook-logo"
                    src="icons/fb_square_white.svg"
                  />
                  <span>Log in with Facebook</span>
                </Button>

                <div className="w-full my-1">
                  <Separator />
                </div>

                <SignUpForm />
              </div>

              <LoginCard />

              <LinksCard />
            </div>
          </div>

          <div className="items-center justify-center hidden px-8 my-10 md:flex">
            <Footer />
          </div>
        </main>
      </section>
    </SplashScreen>
  );
}
