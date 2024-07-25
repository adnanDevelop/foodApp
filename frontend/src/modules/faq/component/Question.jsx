const Question = () => {
  return (
    <main className=" bg-light-white">
      {/* Title section */}
      <section className="custom_width section_padding">
        <div>
          <h2 className="!font-bold text-center text-heading-color md:!text-[35px] leading-10">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Content section */}
        <div className="grid grid-cols-12 mt-[50px] gap-6">
          {/* Image section */}
          <div className="flex items-center justify-center lg:col-span-4 col-span-full mb-[20px]">
            <div className="faq_img">
              <img src="/image/faq.svg" className="max-w-auto" alt="" />
            </div>
          </div>

          {/* Accordin section */}
          <div className="lg:col-span-8 col-span-full">
            <div className="faq_accordin">
              <div className="w-full join join-vertical">
                {/* first accordin */}
                <div className="mb-2 border !rounded-lg collapse collapse-arrow join-item !border-[#e8e8e8ff] !bg-white">
                  <input type="checkbox" name="my-accordion-1" defaultChecked />
                  <div className="text-base font-medium leading-none sm:text-lg collapse-title text-heading-color ">
                    Click to open this one and close others
                  </div>
                  <div className="border !border-[#e8e8e8ff] collapse-content ps-5 ">
                    <p className="text-justify  md:text-[15px] text-content-color  pt-2">
                      To track your order, you will need to have the tracking
                      number or order ID provided by the seller or shipping
                      carrier. Once you have this information, you can usually
                      track your order online by visiting the carrier&apos;s
                      website and entering the tracking number or order ID in
                      the designated tracking field.
                    </p>
                  </div>
                </div>

                {/* Second accordin */}
                <div className="mb-2 border !rounded-lg collapse collapse-arrow join-item !border-[#e8e8e8ff] !bg-white">
                  <input type="checkbox" name="my-accordion-1" />
                  <div className="text-base font-medium leading-none sm:text-lg collapse-title text-heading-color ">
                    I want to manage my order
                  </div>
                  <div className="border !border-[#e8e8e8ff] collapse-content ps-5 ">
                    <p className="text-justify  md:text-[15px] text-content-color  pt-2">
                      1. Check your order confirmation email or account: This
                      should contain information about your order, including the
                      expected delivery date, tracking number (if applicable),
                      and contact information for the seller.
                    </p>
                    <p className="mt-1 text-justify  md:text-[15px] text-content-color">
                      2. Contact the seller: If you have any questions about
                      your order or need to make changes, the best way to do so
                      is to contact the seller directly. You can typically find
                      their contact information on their website or in your
                      order confirmation email.
                    </p>
                    <p className="mt-1 text-justify  md:text-[15px] text-content-color">
                      3. Check the order status: Many online retailers provide a
                      way for you to check the status of your order online. This
                      can give you information about when your order was
                      shipped, when it&apos;s expected to arrive, and any
                      tracking information.
                    </p>
                    <p className="mt-1 text-justify  md:text-[15px] text-content-color">
                      4. Make changes to your order: Depending on the
                      seller&apos;s policies, you may be able to make changes to
                      your order, such as adding or removing items, changing the
                      shipping address, or canceling the order altogether.
                      Contact the seller to see if this is possible.
                    </p>
                  </div>
                </div>

                {/* Third accordin */}
                <div className="mb-2 border !rounded-lg collapse collapse-arrow join-item !border-[#e8e8e8ff] !bg-white">
                  <input type="checkbox" name="my-accordion-1" />
                  <div className="text-base font-medium leading-none sm:text-lg collapse-title text-heading-color ">
                    I did not receive instant Cashback
                  </div>
                  <div className="border !border-[#e8e8e8ff] collapse-content ps-5 ">
                    <p className="text-justify  md:text-[15px] text-content-color mb-1.5 pt-2">
                      I&apos;m sorry to hear that you did not receive an instant
                      cashback. To help you with this issue, I need more
                      information.
                    </p>
                    <p className="text-justify  md:text-[15px] text-content-color ">
                      1.What type of purchase did you make?
                    </p>
                    <p className="mt-1 text-justify  md:text-[15px] text-content-color">
                      2. From which website or store did you make the purchase?
                    </p>
                    <p className="mt-1 text-justify  md:text-[15px] text-content-color">
                      3. Did you receive any confirmation or receipt for your
                      purchase?
                    </p>
                    <p className="mt-1 text-justify  md:text-[15px] text-content-color">
                      4. Did you check the terms and conditions of the cashback
                      offer before making the purchase?
                    </p>
                    <p className="mt-1 text-justify  md:text-[15px] text-content-color">
                      5. What type of purchase did you make?Have you contacted
                      the website or store&apos;s customer support regarding the
                      issue?
                    </p>
                  </div>
                </div>

                {/* Fourth accordin */}
                <div className="mb-2 border !rounded-lg collapse collapse-arrow join-item !border-[#e8e8e8ff] !bg-white">
                  <input type="checkbox" name="my-accordion-1" />
                  <div className="text-base font-medium leading-none sm:text-lg collapse-title text-heading-color ">
                    I am unable to pay using Wallet
                  </div>
                  <div className="border !border-[#e8e8e8ff] collapse-content ps-5 ">
                    <p className="text-justify  md:text-[15px] text-content-color mb-1 pt-2 ">
                      I&apos;m sorry to hear that you did not receive an instant
                      cashback. To help you with this issue, I need more
                      information.
                    </p>
                    <p className="text-justify  md:text-[15px] text-content-color">
                      1.What type of purchase did you make?
                    </p>
                    <p className="mt-1 text-justify  md:text-[15px] text-content-color">
                      2. From which website or store did you make the purchase?
                    </p>
                    <p className="mt-1 text-justify  md:text-[15px] text-content-color">
                      3. Did you receive any confirmation or receipt for your
                      purchase?
                    </p>
                    <p className="mt-1 text-justify  md:text-[15px] text-content-color">
                      4. Did you check the terms and conditions of the cashback
                      offer before making the purchase?
                    </p>
                    <p className="mt-1 text-justify  md:text-[15px] text-content-color">
                      5. What type of purchase did you make?Have you contacted
                      the website or store&apos;s customer support regarding the
                      issue?
                    </p>
                  </div>
                </div>

                {/* fifth accordin */}
                <div className="mb-2 border !rounded-lg collapse collapse-arrow join-item !border-[#e8e8e8ff] !bg-white">
                  <input type="checkbox" name="my-accordion-1" />
                  <div className="text-base font-medium leading-none sm:text-lg collapse-title text-heading-color ">
                    I want help with returns & refunds
                  </div>
                  <div className="border !border-[#e8e8e8ff] collapse-content ps-5 ">
                    <p className="pt-2 text-justify text-content-color">
                      To track your order, you will need to have the tracking
                      number or order ID provided by the seller or shipping
                      carrier. Once you have this information, you can usually
                      track your order online by visiting the carrier&apos;s
                      website and entering the tracking number or order ID in
                      the designated tracking field.
                    </p>
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
