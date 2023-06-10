import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["user"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleDelete = (user) => {
    console.log(user);
  };
  return (
    <div className="w-full px-7">
      <h2 className="text-2xl font-semibold my-4">
        Total Users: {users.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user?._id}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user?.role === "admin" ? (
                    <>
                      <button className="btn mr-3 bg-[#5FC7AE] hover:bg-none hover:bg-[#5FC7AE] text-white">
                        Make Admin
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="btn mr-3 bg-[#5FC7AE] hover:bg-none hover:bg-[#5FC7AE] text-white">
                        Admin
                      </button>
                    </>
                  )}
                  {user?.role === "instructor" ? (
                    <>
                      <button className="btn bg-[#5FC7AE] hover:bg-none hover:bg-[#5FC7AE] text-white">
                        Instructor
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="btn bg-[#5FC7AE] hover:bg-none hover:bg-[#5FC7AE] text-white">
                        Make Instructor
                      </button>
                    </>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn bg-red-500 hover:bg-none hover:bg-red-600 text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
