import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/features/authSlice";
import { fetchLoggedInUser } from "../../../redux/features/userSlice";

// Icons
import { IoIosLogOut } from "react-icons/io";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser, FaMapMarkerAlt, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user.userData);
  const userStatus = useSelector((state) => state.user.status);

  useEffect(() => {
    if (token) {
      dispatch(fetchLoggedInUser(token));
    }
  }, [token, dispatch]);

  const links = [
    { icon: <FaRegUser />, path: "/user-profile", title: "Change Profile" },
    { icon: <RiShoppingBag4Fill />, path: "/my-order", title: "My Order" },
    { icon: <FaMapMarkerAlt />, path: "/user-address", title: "Saved Address" },
    { icon: <FaQuestionCircle />, path: "/help", title: "Help" },
    { icon: <IoSettingsOutline />, path: "/setting", title: "Setting" },
    { icon: <IoIosLogOut />, title: "Log Out" },
  ];

  return (
    <section className=" bg-light-white pb-[10px]">
      {/* Profile header */}
      <div className="w-full h-[150px] yellow_gradient rounded-tl-lg rounded-tr-lg relative">
        <img
          src={userStatus ? user?.image : "/image/avator.png"}
          className="w-[100px] rounded-full border-[5px] border-white  absolute bottom-[-50px] left-[50%] translate-x-[-50%]"
          alt=""
        />
      </div>
      <div className="mt-[55px] flex items-center justify-center flex-col">
        <h4 className="text-lg font-medium text-heading-color">
          {userStatus ? user?.name : "Mark Jecno"}
        </h4>
        <p className="text-sm font-light text-content-color">
          {userStatus ? user?.email : "LQpCJ@example.com"}
        </p>
      </div>

      {/* Profile links  */}
      <ul className="flex flex-col items-start  list-none ps-[18px] mt-[25px] w-full">
        {links.map((element, index) => {
          return element.path ? (
            <li
              className={`flex items-center w-full py-2.5 font-normal capitalize border-r-2 border-transparent hover:border-r-yellow cursor-pointer gap-x-1.5 text-heading-color transitions hover:text-yellow group ${
                location.pathname === element.path &&
                "border-r-yellow text-yellow"
              }`}
              key={index}
            >
              {element.icon}
              <Link
                to={element.path}
                className={`text-heading-color hover:text-heading-color group-hover:text-yellow transitions ${
                  location.pathname === element.path && "text-yellow"
                }`}
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
              {element.title}
            </button>
          );
        })}
      </ul>
    </section>
  );
};

export default UserProfile;
