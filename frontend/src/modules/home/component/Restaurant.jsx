import SectionHeader from "../../../components/global/SectionHeader";

const Restaurant = () => {
  return (
    <main className=" bg-[#F9F9F9] section_padding">
      <div className="custom_width">
        <SectionHeader title="Featured Restaurant" />

        {/* Cards */}
        <section className="mt-[40px] grid grid-cols-12">
          <div className="w-full col-span-3 p-3 border border-gray-300 rounded-md food_card">
            {/* Image */}
            <div className="relative rounded-md">
              <img
                src="/image/restaurant/img-1.png"
                className="rounded-md"
                alt=""
              />
              {/* label */}
              <div className="absolute bottom-2 left-2">
                <p className="text-xs font-normal text-white">upto $2</p>
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
