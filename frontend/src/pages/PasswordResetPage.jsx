import Footer from "components/Footer";
import SplashScreen from "components/wrappers/SplashScreen";
import PasswordResetForm from "components/forms/PasswordResetForm";

export default function PasswordResetPage() {
  return (
    <SplashScreen>
      <section className="text-white bg-black scrollbar-dark">
        <main className="overflow-auto h-screen min-w-[320px]">
          <div className="flex items-center justify-center min-h-screen xs:px-8">
            <PasswordResetForm />
          </div>

          <div className="items-center justify-center hidden px-8 my-10 md:flex">
            <Footer />
          </div>
        </main>
      </section>
    </SplashScreen>
  );
}
