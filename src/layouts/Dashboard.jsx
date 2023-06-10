import { NavLink, Outlet } from "react-router-dom";
import {
  FaWallet,
  FaHome,
  FaUsers,
  FaUserGraduate,
  FaUsersCog,
  FaUserPlus,
} from "react-icons/fa";

const Dashboard = () => {
  const isAdmin = true;
  const isInstructor = false;
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="p-4 w-80 h-full bg-[#d4f7ee]">
            <h1 className="font-semibold text-2xl md:text-3xl uppercase mb-8 pl-2">
              Yoga Zone
            </h1>
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard/adminhome"
                    className="flex items-center gap-4 my-2 hover:bg-gray-300 py-2 pl-2 rounded-md"
                  >
                    <FaHome></FaHome> <span>Admin Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageclasses"
                    className="flex items-center gap-4 my-2 hover:bg-gray-300 py-2 pl-2 rounded-md"
                  >
                    {" "}
                    <FaUsersCog /> <span>Manage Classes</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageusers"
                    className="flex items-center gap-4 my-2 hover:bg-gray-300 py-2 pl-2 rounded-md"
                  >
                    <FaUsers></FaUsers> <span>Manage Users</span>
                  </NavLink>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard/instructorhome"
                    className="flex items-center gap-4 my-2 hover:bg-gray-300 py-2 pl-2 rounded-md"
                  >
                    <FaHome></FaHome> Instructor Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addclass"
                    className="flex items-center gap-4 my-2 hover:bg-gray-300 py-2 pl-2 rounded-md"
                  >
                    <FaUserPlus /> Add a Class
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/myclass"
                    className="flex items-center gap-4 my-2 hover:bg-gray-300 py-2 pl-2 rounded-md"
                  >
                    <FaUsers /> My classes
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/dashboard/userhome"
                    className="flex items-center gap-4 my-2 hover:bg-gray-300 py-2 pl-2 rounded-md"
                  >
                    <FaHome></FaHome> <span>User Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/selectedclass"
                    className="flex items-center gap-4 my-2 hover:bg-gray-300 py-2 pl-2 rounded-md"
                  >
                    {" "}
                    <FaUserPlus></FaUserPlus> <span>Selected Classes</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/enrollclass"
                    className="flex items-center gap-4 my-2 hover:bg-gray-300 py-2 pl-2 rounded-md"
                  >
                    {" "}
                    <FaUsers /> <span>Enroll Classes</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/paymenthistory"
                    className="flex items-center gap-4 my-2 hover:bg-gray-300 py-2 pl-2 rounded-md"
                  >
                    <FaWallet></FaWallet> <span>Payment History</span>
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink
                to="/"
                className="flex items-center gap-4 my-2 hover:bg-gray-300 py-2 pl-2 rounded-md"
              >
                <FaHome></FaHome> <span>Home</span>
              </NavLink>{" "}
            </li>
            <li>
              <NavLink
                to="/classes"
                className="flex items-center gap-4 my-2 hover:bg-gray-300 py-2 pl-2 rounded-md"
              >
                {" "}
                <FaUserGraduate /> <span>Instructors</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/instructors"
                className="flex items-center gap-4 my-2 hover:bg-gray-300 py-2 pl-2 rounded-md"
              >
                {" "}
                <FaUsers /> <span>Classes</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
