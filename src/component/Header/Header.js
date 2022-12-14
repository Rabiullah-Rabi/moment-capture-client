import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const menuItems = (
    <>
      <li>
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/services"> Services</Link>
        <Link to="/portfolio"> Portfolio</Link>
        <Link to="/blog"> Blog</Link>
        <Link to="/contact"> Contact Us</Link>
      </li>
    </>
  );
  return (
    <div className="container mx-auto p-3 ">
      <div className="navbar bg-base-100">
        <div className="navbar-start w-full justify-between">
          <Link to="/" className="">
            <img
              src="https://i.ibb.co/fXWkfQL/CAPTURE-MOMENT.png"
              className="h-10"
              alt=""
            />
          </Link>
          <div className="dropdown dropdown-left">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 top-12"
            >
              {menuItems}
              {user ? (
                <>
                  <ul className="">
                    <li>
                      <Link to="/userprofile">My Profile</Link>
                    </li>
                    <li>
                      <Link to="/reviews">My Review</Link>
                    </li>
                    <li>
                      <Link to="/addservice">Add A service</Link>
                    </li>
                    <li>
                      <Link onClick={() => logOut()}>Log out</Link>
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <div>
                    <Link to="/login" className="btn mr-3">
                      Log in{" "}
                    </Link>
                    <Link to="/signup" className="btn">
                      Sign Up{" "}
                    </Link>
                  </div>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          {user ? (
            <>
              <div className="dropdown dropdown-hover dropdown-left">
                <label tabIndex={0} className="btn m-1">
                  {user?.displayName ? user.displayName : "User"}
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/userprofile">My Profile</Link>
                  </li>
                  <li>
                    <Link to="/reviews">My Review</Link>
                  </li>
                  <li>
                    <Link to="/addservice">Add A service</Link>
                  </li>
                  <li>
                    <Link onClick={() => logOut()}>Log out</Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div>
                <Link to="/login" className="btn mr-3">
                  Log in{" "}
                </Link>
                <Link to="/signup" className="btn">
                  Sign Up{" "}
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
