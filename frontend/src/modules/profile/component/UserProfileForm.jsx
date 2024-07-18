import { FaLock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaRegUser, FaPhoneAlt } from "react-icons/fa";

const UserProfileForm = () => {
  return (
    <section className=" p-[18px] bg-light-white">
      <div className="line_animation w-[150px] h-[2px] bg-gray-200 mb-1 overflow-hidden shadow-md">
        <div className="bg-orange w-[40px] h-full animate-progress"></div>
      </div>
      <h3 className="mt-2 font-semibold text-heading-color">Change Profile</h3>

      <form className="w-full mt-6">
        {/* username input */}
        <div className="w-full p-4 bg-white ">
          <div className=" mb-1.5 gap-x-2 flex items-center">
            <FaRegUser className="text-lg text-yellow" />
            <label htmlFor="name" className="font-semibold text-heading-color">
              Name:
            </label>
          </div>
          <input
            type="text"
            className="w-full h-[50px] bg-light-white focus:outline-none px-2 rounded-md"
          />
        </div>

        {/* email input */}
        <div className="w-full p-4 bg-white ">
          <div className=" mb-1.5 gap-x-2 flex items-center">
            <MdEmail className="text-lg text-yellow" />
            <label htmlFor="email" className="font-semibold text-heading-color">
              Email:
            </label>
          </div>
          <input
            type="email"
            className="w-full h-[50px] bg-light-white focus:outline-none px-2 rounded-md"
          />
        </div>

        {/* Number input */}
        <div className="w-full p-4 bg-white ">
          <div className=" mb-1.5 gap-x-2 flex items-center">
            <FaPhoneAlt className="text-lg text-yellow" />
            <label htmlFor="name" className="font-semibold text-heading-color">
              Number:
            </label>
          </div>
          <input
            type="text"
            className="w-full h-[50px] bg-light-white focus:outline-none px-2 rounded-md"
          />
        </div>

        {/* password input */}
        <div className="w-full p-4 bg-white ">
          <div className=" mb-1.5 gap-x-2 flex items-center">
            <FaLock className="text-lg text-yellow" />
            <label htmlFor="name" className="font-semibold text-heading-color">
              Password:
            </label>
          </div>
          <input
            type="text"
            className="w-full h-[50px] bg-light-white focus:outline-none px-2 rounded-md"
          />
        </div>
      </form>
    </section>
  );
};

export default UserProfileForm;
