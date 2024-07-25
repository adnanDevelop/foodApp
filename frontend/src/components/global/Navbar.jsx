import { useState } from "react";
import { Link } from "react-router-dom";

// custom hook
import { getUser } from "../../utils/getUser";

// Redux
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/authSlice";

// Icons
import { BsCartPlus } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const dispatch = useDispatch();
  const userData = getUser();

  const [open, setOpen] = useState(false);
  const [sideBar, showSideBar] = useState(false);

  const links = [
    { path: "/", name: "Home" },
    { path: "/menu", name: "Menu" },
    { path: "/blog", name: "blog" },
    { path: "/restaurant", name: "Restaurant" },
    { path: "/contact", name: "Contact" },
  ];

  const openSideBar = () => {
    setOpen(!open);
    showSideBar(!sideBar);
  };

  const handleClick = () => {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <div className="relative">
      {/* Lg navbar */}
      <div className="absolute top-0 left-[50%] translate-x-[-50%] w-full mx-auto custom_width lg:block hidden">
        <div className="flex items-center justify-between w-full h-[100px]">
          {/* Logo */}
          <div>
            <img
              src="/image/logo.svg"
              className="w-[120px] object-cover"
              alt=""
            />
          </div>
          {/* Nav links */}
          <ul className="flex items-center justify-center list-none gap-x-10">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="font-medium text-white capitalize transitions hover:text-yellow"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Right section */}
          <div className="flex items-center gap-x-2">
            {/* Cart section */}
            <div className="rounded-md dropdown dropdown-bottom dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="relative m-1 text-xl text-white border-r pe-3 border-r-content-color"
              >
                <p className=" w-[15px] h-[15px] flex items-center justify-center text-xs leading-none text-white rounded-full cart_item bg-yellow absolute top-[-0.5rem] right-[0.4rem]">
                  5
                </p>
                <BsCartPlus />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-xl p-4 z-[1] w-[250px]  shadow"
              >
                {/* Cart items */}
                <div></div>
                {/* Total section */}
                <div>
                  <div className="flex items-center justify-between">
                    <p>Total:</p>
                    <p>$100.00</p>
                  </div>
                  <button className="w-full btn btn-primary">View Cart</button>
                </div>
              </ul>
            </div>

            {/* User Profile */}
            <div>
              <div className="rounded-md dropdown dropdown-bottom dropdown-end ">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center m-1 gap-x-2 "
                >
                  <img
                    src={`${
                      userData?.data
                        ? userData?.data?.data?.image
                        : "/image/avator.png"
                    }`}
                    className="w-[40px] h-[40px] object-cover rounded-full"
                    alt=""
                  />
                  <div>
                    <p className="text-sm font-medium leading-none capitalize text-content-color">
                      {userData?.data ? userData?.data?.data?.name : "User"}
                    </p>
                    <p className="text-base font-medium text-white">
                      My Account
                    </p>
                  </div>
                </div>
                {/* dropdown links */}
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-xl p-4 z-[1] w-[200px]  shadow"
                >
                  <li onClick={handleClick}>
                    <Link className="p-0 pb-2 font-medium text-content-color transitions hover:text-yellow focus:text-yellow">
                      Saved Address
                    </Link>
                  </li>

                  <li onClick={handleClick}>
                    <Link
                      to="/user-profile"
                      className="p-0 pb-2 font-medium text-content-color transitions hover:text-yellow focus:text-yellow"
                    >
                      Profile
                    </Link>
                  </li>
                  <li onClick={handleClick}>
                    <Link className="p-0 pb-2 font-medium text-content-color transitions hover:text-yellow focus:text-yellow">
                      My Orders
                    </Link>
                  </li>
                  <li onClick={handleClick}>
                    <Link
                      to="/setting"
                      className="p-0 pb-2 font-medium text-content-color transitions hover:text-yellow focus:text-yellow"
                    >
                      Setting
                    </Link>
                  </li>
                  <li onClick={handleClick}>
                    <Link className="p-0 pb-2 font-medium text-content-color transitions hover:text-yellow focus:text-yellow">
                      Saved Cards
                    </Link>
                  </li>
                  <button
                    type="button"
                    className="flex items-center pt-2 font-medium border-t text-yellow border-t-light-white gap-x-1"
                    onClick={() => dispatch(logout())}
                  >
                    <IoExitOutline className="text-lg" /> Logout
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Screen navbar */}
      <div className="w-full mx-auto custom_width absolute left-[50%] translate-x-[-50%] block lg:hidden  z-[1]">
        <div className="flex items-center justify-between custom_width h-[60px]">
          {/* Logo */}
          <div className="flex items-center gap-x-3">
            {/* Animated hamburger */}
            <div className="lg:hidden">
              <button
                type="button"
                className="hamburger flex flex-col md:gap-y-[6px] gap-y-[5px]"
                onClick={openSideBar}
              >
                <span
                  className={`md:w-[25px] w-[20px] h-[2px] bg-white rounded-full transform transition duration-500 ease-in-out ${
                    open
                      ? "rotate-45 md:translate-y-[0.5rem] translate-y-[0.6rem]"
                      : ""
                  }`}
                ></span>
                <span
                  className={`md:w-[25px] w-[20px] h-[2px] bg-white rounded-full transform transition duration-500 ease-in-out ${
                    open ? " opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`md:w-[25px] w-[20px] h-[2px] bg-white rounded-full transform transition duration-500 ease-in-out ${
                    open
                      ? " -rotate-45 md:translate-y-[-.6rem] translate-y-[-.45rem]"
                      : ""
                  }`}
                ></span>
              </button>
            </div>
            <img
              src="/image/logo.svg"
              className="w-[100px] object-cover"
              alt=""
            />
          </div>

          {/* Right section */}
          <div className="flex items-center gap-x-2">
            {/* Cart section */}
            <div className="rounded-md dropdown dropdown-bottom dropdown-end ">
              <Link
                to="/cart"
                tabIndex={0}
                role="button"
                className="relative block m-1 text-xl text-white border-r pe-3 border-r-content-color"
              >
                <p className=" w-[15px] h-[15px] flex items-center justify-center text-xs leading-none text-white rounded-full cart_item bg-yellow absolute top-[-0.5rem] right-[0.4rem]">
                  5
                </p>
                <BsCartPlus />
              </Link>
            </div>

            {/* User Profile */}
            <div>
              <div className="rounded-md dropdown dropdown-bottom dropdown-end ">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center m-1 gap-x-2 "
                >
                  <img
                    src={`${
                      userData?.data
                        ? userData?.data?.data?.image
                        : "/image/avator.png"
                    }`}
                    className="w-[40px] h-[40px] object-cover rounded-full"
                    alt=""
                  />
                  <div className="hidden md:block">
                    <p className="text-sm font-medium leading-none capitalize text-content-color">
                      {userData?.data ? userData?.data?.data?.name : "User"}
                    </p>
                    <p className="text-base font-medium text-white">
                      My Account
                    </p>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-xl p-3 z-[1] w-[150px]  shadow "
                >
                  <li onClick={handleClick}>
                    <Link className="p-0 pb-1.5 font-medium text-xs text-content-color transitions hover:text-yellow focus:text-yellow">
                      Saved Address
                    </Link>
                  </li>
                  <li onClick={handleClick}>
                    <Link
                      to="/user-profile"
                      className="p-0 pb-1.5 font-medium text-xs text-content-color transitions hover:text-yellow focus:text-yellow"
                    >
                      Profile
                    </Link>
                  </li>
                  <li onClick={handleClick}>
                    <Link className="p-0 pb-1.5 font-medium text-xs text-content-color transitions hover:text-yellow focus:text-yellow">
                      My Orders
                    </Link>
                  </li>
                  <li onClick={handleClick}>
                    <Link
                      to="/setting"
                      className="p-0 pb-1.5 font-medium text-xs text-content-color transitions hover:text-yellow focus:text-yellow"
                    >
                      Setting
                    </Link>
                  </li>
                  <li onClick={handleClick}>
                    <Link className="p-0 pb-1.5 font-medium text-xs text-content-color transitions hover:text-yellow focus:text-yellow">
                      Saved Cards
                    </Link>
                  </li>
                  <button
                    type="button"
                    className="flex items-center text-xs font-medium border-t text-yellow border-t-light-white gap-x-1"
                    onClick={() => dispatch(logout())}
                  >
                    <IoExitOutline className="text-lg" /> Logout
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Link */}
      <div
        className={`fixed w-[250px] h-screen bg-black top-0 transitions z-10 ${
          sideBar ? " left-[0%]" : "left-[-200%]"
        } `}
      >
        {/* Nav links */}
        <div className="p-[20px]">
          <div className="flex items-center justify-between menu_header">
            <div className="logo">
              <Link to="/">
                <img
                  src="/image/logo.svg"
                  alt=""
                  className="inline-block w-[100px] object-cover"
                  onClick={() => {
                    showSideBar(false);
                    setOpen(false);
                  }}
                  loading="lazy"
                />
              </Link>
            </div>
            <button
              className="close_btn text-[16px] text-white p-2 border-2  border-white rounded-md transition duration-300 hover:border-white hover:text-white "
              onClick={() => {
                showSideBar(false);
                setOpen(false);
              }}
            >
              <GrClose />
            </button>
          </div>
          <ul className="flex flex-col items-start list-none gap-y-6 mt-[50px]">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-white capitalize transitions hover:text-yellow"
                  onClick={() => {
                    showSideBar(false);
                    setOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
