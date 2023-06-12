import React from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import FeedbackModal from "../FeedbackModal/FeedbackModal";

const ManageClasses = () => {
  const { data: classes = [], refetch } = useQuery(["class"], async () => {
    const res = await fetch("https://yoga-zone-server.vercel.app/classes");
    return res.json();
  });
  console.log(classes);

  const handleMakeApproved = (id) => {
    fetch(`https://yoga-zone-server.vercel.app/classes/approved/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "successfully approved this class",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeDeny = (id) => {
    fetch(`https://yoga-zone-server.vercel.app/classes/deny/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Deny this class !!!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full px-7">
      <h2 className="text-2xl font-semibold my-4">
        Total Added Classes: {classes.length}
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => (
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
                {item?.status === "approved" ? (
                  <>
                    <td className="text-green-500">Approved</td>
                  </>
                ) : item?.status === "deny" ? (
                  <>
                    <td className="text-yellow-500">Deny</td>
                  </>
                ) : (
                  <>
                    <td>{item.status}</td>
                  </>
                )}

                <th>
                  {item.status === "approved" ? (
                    <>
                      <button
                        onClick={() => handleMakeApproved(item?._id)}
                        className="btn btn-sm mr-2"
                        disabled
                      >
                        Approve
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleMakeApproved(item?._id)}
                        className="btn btn-sm mr-2"
                      >
                        Approve
                      </button>
                    </>
                  )}
                  {item?.status === "deny" ? (
                    <>
                      <button
                        onClick={() => handleMakeDeny(item?._id)}
                        className="btn btn-sm mr-2"
                        disabled
                      >
                        Deny
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleMakeDeny(item?._id)}
                        className="btn btn-sm mr-2"
                      >
                        Deny
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => window.my_modal_1.showModal(item?._id)}
                    className="btn btn-sm"
                  >
                    Feedback
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <FeedbackModal />
      </div>
    </div>
  );
};

export default ManageClasses;
