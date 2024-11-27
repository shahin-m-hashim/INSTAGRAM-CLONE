import Footer from "../Footer";
import Separator from "../Separator";
import LinksCard from "../cards/LinksCard";
import SignUpForm from "../forms/SignUpForm";
import SplashScreen from "../../SplashScreen";
import Button from "../Button";

export default function SignUp() {
  return (
    <SplashScreen>
      <section className="text-white bg-black lg:gap-2">
        <main className="flex flex-col items-center justify-center min-h-screen py-4">
          <div className="w-[300px] md:w-[350px] px-8 py-4 md:p-0">
            <div className="text-center md:px-10 md:py-8 md:border flex flex-col justify-center md:border-[rgb(54,54,54)]">
              <div className="flex flex-col items-center justify-center gap-4 py-4 mb-3 md:py-0">
                <img src="images/logo.svg" alt="logo" width={170} />
                <p className="text-[rgb(168,168,168)] font-semibold text-base">
                  Sign up to see photos and videos from your friends.
                </p>
                <Button type="button">
                  <img
                    width={20}
                    alt="facebook-logo"
                    src="icons/fb_square_white.svg"
                  />
                  <span>Log in with Facebook</span>
                </Button>
              </div>
              <Separator />
              <SignUpForm />
            </div>

            <div className="mt-3 text-sm mb-4 md:p-5 md:border justify-center flex gap-1 md:border-[rgb(54,54,54)]">
              <p>Have an account?</p>
              <a className="text-[rgb(0,149,246)] font-semibold">Log in</a>
            </div>

            <LinksCard />
          </div>
        </main>
        <div className="px-6 py-10">
          <Footer />
        </div>
      </section>
    </SplashScreen>
  );
}
