import React from "react";
import { GrYoga } from "react-icons/Gr";
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
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Instructors</Link>
      </li>
      <li>
        <Link to="/order/salad">Classes</Link>
      </li>
      {isAdmin ? (
        <li>
          <Link to="/dashboard/adminhome">Dashboard</Link>
        </li>
      ) : (
        <li>
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
      <li>
        <Link to="/login">Login</Link>
      </li>
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
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-base"
              >
                {navOptions}
              </ul>
            </div>
            <Link to="/">
              <span className="flex items-center space-x-3">
                <GrYoga className="text-4xl text-[#F29D7E]" />

                <p className="text-xl text-[#345A5B] font-bold cursor-pointer">
                  YOGA ZONE
                </p>
              </span>
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu-horizontal px-1 space-x-10 text-gray-800 font-medium text-base font-serif items-center">
              {navOptions}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
