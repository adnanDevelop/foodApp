import { Link } from "react-router-dom";

// Icons
import { BsCartPlus } from "react-icons/bs";

const Navbar = () => {
  const links = [
    { path: "/", name: "Home" },
    { path: "/menu", name: "Menu" },
    { path: "/blog", name: "blog" },
    { path: "/restaurant", name: "Restaurant" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <div className="custom_width">
      {/* Lg navbar */}
      <div className="flex items-center justify-between w-full ">
        {/* Logo */}
        <div>
          <img
            src="/image/logo.svg"
            className="w-[100px] object-cover"
            alt=""
          />
        </div>
        {/* Nav links */}
        <ul className="flex items-center justify-center list-none gap-x-10">
          {links.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        {/* Right section */}
        <div>
          {/* Cart section */}
          <div className="rounded-md dropdown dropdown-bottom dropdown-end ">
            <div tabIndex={0} role="button" className="m-1 btn">
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
              <div tabIndex={0} role="button" className="m-1 btn">
                <img
                  src="/image/avator.png"
                  className="w-[40px] h-[40px] object-cover rounded-full"
                  alt=""
                />
                <div>
                  <p>John</p>
                  <p>My Account</p>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-xl p-4 z-[1] w-[250px]  shadow"
              ></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
