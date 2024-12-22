import Footer from "components/Footer";

export default function ExplorePage() {
  return (
    <main className="bg-primary flex flex-col text-primary h-screen overflow-auto min-w-[320px] md:pt-0 pb-[50px] md:pb-0 md:pl-[80px] xl:pl-[250px] pt-[60px]">
      <div className="flex flex-col flex-1 gap-1 md:gap-2 md:my-10 md:px-6 xl:px-36">
        <div className="w-full h-[calc(100vh/3)] xs:h-[calc(100vh/2)] md:h-[calc(100vh-5rem)]">
          <div className="float-right bg-gray-400 explore-box-reel">
            Full-height box
          </div>
          <div className="float-left bg-gray-400 explore-box">Box 1</div>
          <div className="float-left bg-gray-400 explore-box">Box 2</div>
          <div className="float-left bg-gray-400 explore-box">Box 3</div>
          <div className="float-left bg-gray-400 explore-box">Box 4</div>
        </div>

        <div className="w-full h-[calc(100vh/3)] xs:h-[calc(100vh/2)] md:h-[calc(100vh-5rem)]">
          <div className="float-left bg-gray-400 explore-box-reel">
            Full-height box
          </div>
          <div className="float-right bg-gray-400 explore-box">Box 1</div>
          <div className="float-right bg-gray-400 explore-box">Box 2</div>
          <div className="float-right bg-gray-400 explore-box">Box 3</div>
          <div className="float-right bg-gray-400 explore-box">Box 4</div>
        </div>

        <div className="w-full h-[calc(100vh/3)] xs:h-[calc(100vh/2)] md:h-[calc(100vh-5rem)]">
          <div className="float-right bg-gray-400 explore-box-reel">
            Full-height box
          </div>
          <div className="float-left bg-gray-400 explore-box">Box 1</div>
          <div className="float-left bg-gray-400 explore-box">Box 2</div>
          <div className="float-left bg-gray-400 explore-box">Box 3</div>
          <div className="float-left bg-gray-400 explore-box">Box 4</div>
        </div>

        <div className="w-full h-[calc(100vh/3)] xs:h-[calc(100vh/2)] md:h-[calc(100vh-5rem)]">
          <div className="float-left bg-gray-400 explore-box-reel">
            Full-height box
          </div>
          <div className="float-right bg-gray-400 explore-box">Box 1</div>
          <div className="float-right bg-gray-400 explore-box">Box 2</div>
          <div className="float-right bg-gray-400 explore-box">Box 3</div>
          <div className="float-right bg-gray-400 explore-box">Box 4</div>
        </div>
      </div>

      <div className="hidden my-10 md:block">
        <Footer />
      </div>
    </main>
  );
}
