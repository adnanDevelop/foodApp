// Redux
import { useDispatch } from "react-redux";
import { getUser } from "../../../utils/getUser";
import { logout } from "../../../redux/features/authSlice";

// Icons
import { IoIosLogOut } from "react-icons/io";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser, FaMapMarkerAlt, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const dispatch = useDispatch();
  const userData = getUser();

  const links = [
    { icon: <FaRegUser />, path: "/user-profile", title: "Change Profile" },
    { icon: <RiShoppingBag4Fill />, path: "/my-order", title: "My Order" },
    { icon: <FaMapMarkerAlt />, path: "/user-address", title: "Saved Address" },
    { icon: <FaQuestionCircle />, path: "/faq", title: "Help" },
    { icon: <IoSettingsOutline />, path: "/setting", title: "Setting" },
    { icon: <IoIosLogOut />, title: "Log Out" },
  ];

  return (
    <section className=" bg-light-white md:pb-[10px]">
      {/* Profile header */}
      <div className="w-full h-[150px] yellow_gradient rounded-tl-lg rounded-tr-lg relative">
        <img
          src={
            userData?.data ? userData?.data?.data?.image : "/image/avator.png"
          }
          className="w-[100px] h-[100px] object-cover rounded-full border-[5px] border-white  absolute bottom-[-50px] left-[50%] translate-x-[-50%]"
          alt=""
        />
      </div>
      <div className="mt-[55px] flex items-center justify-center flex-col">
        <h4 className="text-lg font-medium text-heading-color">
          {userData?.data ? userData?.data?.data?.name : "Mark Jecno"}
        </h4>
        <p className="text-sm font-light text-content-color">
          {userData?.data ? userData?.data?.data?.email : "LQpCJ@example.com"}
        </p>
      </div>

      {/* Profile links  */}
      <ul className="flex md:flex-col flex-row overflow-y-auto items-start md:gap-1 gap-x-6  list-none ps-[18px] md:pe-0 pe-[18px] mt-[25px] w-full">
        {links.map((element, index) => {
          return element.path ? (
            <li
              className={`flex items-center w-full py-2.5 font-normal capitalize md:border-r-2 border-b-2 border-transparent hover:border-r-yellow cursor-pointer gap-x-1.5 text-heading-color transitions hover:text-yellow group ${
                location.pathname === element.path &&
                "md:border-r-yellow border-b-yellow md:border-b-transparent text-yellow"
              }`}
              key={index}
            >
              {element.icon}
              <Link
                to={element.path}
                className={`text-heading-color hover:text-heading-color group-hover:text-yellow transitions text-nowrap ${
                  location.pathname === element.path && "text-yellow"
                }`}
                onClick={() => window.scrollTo({ top: 0 })}
              >
                {element.title}
              </Link>
            </li>
          ) : (
            <button
              className="flex items-center w-full py-2.5 font-normal capitalize border-r-2 border-transparent hover:border-r-yellow cursor-pointer gap-x-1.5 text-heading-color transitions hover:text-yellow group"
              key={index}
              onClick={() => dispatch(logout())}
            >
              {element.icon}
              <span className="text-nowrap"> {element.title}</span>
            </button>
          );
        })}
      </ul>
    </section>
  );
};

export default UserProfile;
