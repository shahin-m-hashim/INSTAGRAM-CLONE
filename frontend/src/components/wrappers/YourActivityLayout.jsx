import Footer from "components/Footer";
import { Outlet } from "react-router-dom";
import ActivityContent from "components/contents/ActivityContent";

export default function YourActivityLayout() {
  return (
    <main className="h-screen flex flex-col overflow-auto min-w-[320px] md:pt-0 pb-[50px] md:pb-0 md:pl-[80px] xl:pl-[250px] pt-[60px]">
      <div className="flex justify-center flex-1 w-full md:px-10 md:mt-10">
        <div className="flex w-full max-w-[900px] rounded-md md:border md:border-tertiary">
          <div className="hidden w-full md:w-[240px] md:flex flex-col md:border-r md:border-r-tertiary">
            <ActivityContent />
          </div>

          <Outlet />
        </div>
      </div>

      <div className="hidden my-10 md:block">
        <Footer />
      </div>
    </main>
  );
}
