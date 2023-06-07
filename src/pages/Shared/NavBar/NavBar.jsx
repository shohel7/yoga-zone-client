import React from "react";
import { TbYoga } from "react-icons/Tb";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
// import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const isAdmin = false;
  //   const { user, logOut } = useContext(AuthContext);
  //   const [showUl, setShowUl] = useState(false);

  //   const handleUl = () => {
  //     setShowUl(true);
  //   };

  //   const handleLogOut = () => {
  //     logOut()
  //       .then((result) => {})
  //       .catch((error) => console.log(error.message));
  //   };
  // sticky top-0 z-30 w-full shadow-xl blur-effect-theme

  const navOptions = (
    <>
      <li className="hover:text-[#5FC7AE] transition-all duration-200 ease-in-out">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-[#5FC7AE] transition-all duration-200 ease-in-out">
        <Link to="/menu">Instructors</Link>
      </li>
      <li className="hover:text-[#5FC7AE] transition-all duration-200 ease-in-out">
        <Link to="/order/salad">Classes</Link>
      </li>
      {isAdmin ? (
        <li className="hover:text-[#5FC7AE] transition-all duration-200 ease-in-out">
          <Link to="/dashboard/adminhome">Dashboard</Link>
        </li>
      ) : (
        <li className="hover:text-[#5FC7AE] transition-all duration-200 ease-in-out">
          <Link to="/dashboard/userhome">Dashboard</Link>
        </li>
      )}
      {/* {user ? ( */}
      {/* <>
          <button onClick={handleLogOut} className="btn btn-ghost">
            LogOut
          </button>
        </> */}
      {/* ) : ( */}
      {/* <> */}
      <button className="border-2 border-[#5FC7AE] px-8 py-2 rounded-full hover:bg-[#AFE3D6] hover:text-translate-x-4 transition-all duration-200 ease-in-out hover:text-white uppercase">
        <Link to="/login">Login</Link>
      </button>

      {/* </> */}
      {/* )} */}
    </>
  );

  return (
    <div className=" ">
      <div className="px-5 md:px-5 lg:max-w-[1230px] mx-auto">
        <div className="navbar py-5">
          <div className="navbar-start">
            <div className="dropdown ">
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
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-gray-500 "
              >
                {navOptions}
              </ul>
            </div>
            <Link to="/">
              <span className="flex items-center space-x-2">
                <TbYoga className="text-4xl stroke-[#5FC7AE]" />

                <p className="text-xl text-gray-500 font-bold cursor-pointer">
                  YOGA<span className="text-[#5FC7AE]">ZONE</span>
                </p>
              </span>
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu-horizontal px-1 space-x-10 font-medium text-gray-500 items-center">
              {navOptions}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
