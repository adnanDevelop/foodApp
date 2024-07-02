import SectionHeader from "../../../components/global/SectionHeader";

const Restaurant = () => {
  return (
    <main className=" bg-[#F9F9F9] section_padding">
      <div className="custom_width">
        <SectionHeader title="Featured Restaurant" />

        {/* Cards */}
        <section className="mt-[40px] grid grid-cols-12 gap-4">
          <div className="w-full col-span-3 p-3 border border-gray-300 rounded-md food_card tarnsitions hover:shadow-md group">
            {/* Image */}
            <div className="relative overflow-hidden rounded-md">
              <img
                src="/image/restaurant/img-1.png"
                className="transition rounded-md group-hover:scale-105"
                alt=""
              />
              <div className="absolute bottom-0 left-0 w-full h-[40%]  bg-gradient-to-t from-[rgba(0,0,0,1)] via-[rgba(0,0,0,0.6)] to-[rgba(255,255,255,0)]" />
              {/* label */}
              <div className="absolute bottom-2 left-3">
                <p className="mb-1 text-xs font-normal text-white">Up to $2</p>
                <h4 className="text-sm font-semibold text-white">50% OFF</h4>
              </div>
            </div>
            {/* body */}
            <div className="mt-3">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-capitalize text-content-color">
                    Poultry Palace
                  </h4>
                  <p className="font-normal text-content-color">
                    Chicken quesadilla, avocado
                  </p>
                </div>
                {/* Rating */}
                <p className="font-normal text-content-color">3.9</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Restaurant;
