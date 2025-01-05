import useStore from "store/_store";
import Footer from "components/Footer";
import NotFoundNavbar from "components/navbars/NotFoundNavbar";
import NotFoundContent from "components/contents/NotFoundContent";

export default function NotFoundPage() {
  const { isAuthenticated } = useStore();

  return (
    <section className="bg-primary text-primary">
      <main className="min-w-[320px] h-screen overflow-auto">
        {!isAuthenticated && <NotFoundNavbar />}

        <div className="flex flex-col items-center px-4 size-full">
          <div className="flex items-center justify-center size-full">
            <NotFoundContent />
          </div>

          <div className="flex justify-center w-full my-10">
            <div className="md:w-[600px] lg:w-[800px]">
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
