// Icons
import { IoSearch } from "react-icons/io5";
function Hero() {
  return (
    <main className="bg-[url('/image/home-bg.jpg')] bg-center bg-no-repeat bg-cover w-ful">
      <section className="h-full custom_width lg:py-[100px] pt-[120px] pb-[150px] grid grid-cols-12 gap-4 items-center">
        <div className="lg:col-span-7 col-span-full">
          <h1 className="!font-semibold lg:leading-tight leading-none text-white lg:text-start text-center">
            Discover{" "}
            <span className="text-transparent gradient bg-clip-text">
              restaurants
            </span>{" "}
            that food deliver near you
          </h1>
          <div className="flex items-center sm:flex-row flex-col lg:w-[90%] w-full mt-6 gap-2 h-auto">
            <div
              className="w-full sm:flex-1 flex items-center overflow-hidden sm:h-[50px] h-[40px] rounded-full border-2 border-[#E2E8FF1A]"
              style={{
                background: `linear-gradient(180deg, rgba(226, 232, 255, 0) 0%, rgba(226, 232, 255, 0.1) 100%), rgba(226, 232, 255, 0.06)`,
              }}
            >
              <div className="w-[50px] h-full flex items-center justify-center text-xl text-yellow bg-transparent">
                <IoSearch />
              </div>
              <input
                type="text"
                className="w-full h-full text-sm font-medium text-white bg-transparent focus:outline-none"
              />
            </div>
            <button className="w-full sm:w-auto sm:flex-none btn-rounded-sm sm:!h-[50px] !h-[40px]">
              Search
            </button>
          </div>
        </div>

        <div className="hidden col-span-5 lg:block">
          <div className="hero_img">
            <img src="/image/home/hero-img.png" alt="" />
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
}

export default Hero;
