import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../../hooks/useAuth";
import FeedbackModal from "../../Admin/FeedbackModal/FeedbackModal";

const MyClasses = () => {
  const { user, loading } = useAuth();
  console.log(user.email);
  const { refetch, data: myClasses = [] } = useQuery({
    queryKey: ["myClass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://yoga-zone-server.vercel.app/classes?instructorEmail=${user?.email}`
      );
      console.log("res from axios", res);
      return res.json();
    },
  });
  console.log(myClasses);
  return (
    <div className="w-full px-7">
      <h2 className="text-2xl font-semibold my-4">
        Total Added My Classes: {myClasses.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Total Enroll Students</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {myClasses.map((item, index) => (
              <tr key={item?._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item?.image} alt="class-image" />
                    </div>
                  </div>
                </td>
                <td>{item?.instructorName}</td>
                <td>{item?.instructorEmail}</td>
                <td>{item?.availableSeats}</td>
                <td>${item?.price}</td>
                <td>{item?.status}</td>
                <td>{item?.totalEnrolledStudents || 0}</td>
                <td>
                  <button
                    onClick={() => window.my_modal_1.showModal(item?._id)}
                    className="btn btn-sm"
                  >
                    Update Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <FeedbackModal />
      </div>
    </div>
  );
};

export default MyClasses;
