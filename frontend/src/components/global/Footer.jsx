import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  const links = [
    {
      title: "Company",
      subTitle: ["About us", "Contact us", "offer", "FAQS"],
    },
    {
      title: "Account",
      subTitle: ["My orders", "Wishlist", "Shopping Cart", "Saved Address"],
    },
    {
      title: "Useful link",
      subTitle: ["Blogs", "Login", "Register", "Profile", "Setting"],
    },
    {
      title: "Top Brands",
      subTitle: ["PizzaBoy", "Saladish", "IcePops", "Maxican Hoy", "La Foodie"],
    },
  ];

  return (
    <footer className="w-full bg-[#1f1f1f]">
      <section className="custom_width py-[60px] grid grid-cols-12 gap-4">
        <div className="lg:col-span-4 col-span-full">
          <div className="web_detail lg:pe-4">
            <img
              src="/image/logo.svg"
              className="sm:max-w-[150px] max-w-[100px]"
              alt=""
            />
            <p className="my-6 text-justify text-content-color">
              Welcome to our online order website! Here, you can browse our wide
              selection of products and place orders from the comfort of your
              own home.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="w-[40px] h-[40px] rounded-full bg-black text-white text-base flex items-center justify-center transitions hover:bg-yellow hover:text-white hover:translate-y-[-5px] group"
              >
                <FaTwitter />
              </button>
              <button
                type="button"
                className="w-[40px] h-[40px] rounded-full bg-black text-white text-base flex items-center justify-center transitions hover:bg-yellow hover:text-white hover:translate-y-[-5px] group"
              >
                <FaFacebookF />
              </button>
              <button
                type="button"
                className="w-[40px] h-[40px] rounded-full bg-black text-white text-base flex items-center justify-center transitions hover:bg-yellow hover:text-white hover:translate-y-[-5px] group"
              >
                <FaLinkedinIn />
              </button>
              <button
                type="button"
                className="w-[40px] h-[40px] rounded-full bg-black text-white text-base flex items-center justify-center transitions hover:bg-yellow hover:text-white hover:translate-y-[-5px] group"
              >
                <AiOutlineInstagram />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-4 lg:col-span-8 col-span-full lg:mt-0">
          {links.map((element, index) => {
            return (
              <div
                className="mb-4 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-full lg:mb-0"
                key={index}
              >
                <h3 className="mb-6 text-[20px] font-medium text-white border-l-2 ps-2 border-l-yellow">
                  {element.title}
                </h3>

                {/* Links */}
                <ul className="list-none ">
                  {element.subTitle.map((element, index) => {
                    return (
                      <li className="mb-2" key={index}>
                        <p className="text-content-color cursor-pointer transitions hover:translate-x-[5px] hover:text-yellow">
                          {element}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

          

      </section>
    </footer>
  );
};

export default Footer;
