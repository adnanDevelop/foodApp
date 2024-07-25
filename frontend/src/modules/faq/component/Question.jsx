import React from "react";

const Question = () => {
  return (
    <main className=" bg-light-white">
      {/* Title section */}
      <section className="custom_width section_padding">
        <div>
          <h2 className="!font-bold text-center text-heading-color !text-[35px]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Content section */}
        <div className="grid grid-cols-12 mt-[50px] gap-6">
          {/* Image section */}
          <div className="col-span-4">
            <div className="faq_img">
              <img src="/image/faq.svg" alt="" />
            </div>
          </div>
          {/* Accordin section */}
          <div className="col-span-8">
            <div className="faq_accordin">
              <div className="w-full join join-vertical">
                <div className="mb-2 border !rounded-lg collapse collapse-arrow join-item !border-gray-500 !bg-white">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="text-xl font-medium collapse-title">
                    Click to open this one and close others
                  </div>
                  <div className="collapse-content">
                    <p>hello</p>
                  </div>
                </div>
                <div className="mb-2 border collapse collapse-arrow join-item border-base-300">
                  <input type="radio" name="my-accordion-4" />
                  <div className="text-xl font-medium collapse-title">
                    Click to open this one and close others
                  </div>
                  <div className="collapse-content">
                    <p>hello</p>
                  </div>
                </div>
                <div className="border collapse collapse-arrow join-item border-base-300">
                  <input type="radio" name="my-accordion-4" />
                  <div className="text-xl font-medium collapse-title">
                    Click to open this one and close others
                  </div>
                  <div className="collapse-content">
                    <p>hello</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Question;
