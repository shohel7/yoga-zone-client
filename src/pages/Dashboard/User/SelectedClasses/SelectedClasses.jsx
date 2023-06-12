import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Payment from "../../Payment/Payment";
import Swal from "sweetalert2";

const SelectedClasses = () => {
  const [items, setItems] = useState([]);
  const {
    data: selectedClass = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Selected"],
    queryFn: async () => {
      const data = await axios.get("http://localhost:5000/selectedClasses");
      // console.log(data?.data);
      return data?.data;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-bars loading-lg text-[#5FC7AE]"></span>
      </div>
    );

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/selectedClasses/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Selected class deleted successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full px-7">
      <h2 className="text-2xl font-semibold my-4">
        Total Selected Classes: {selectedClass.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Action</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {selectedClass.map((item, index) => (
              <tr key={item?._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item?.image} alt="class-image" />
                    </div>
                  </div>
                </td>
                <td>{item?.className}</td>
                <td>{item?.instructorName}</td>
                <td>{item?.instructorEmail}</td>
                <td>{item?.availableSeats}</td>
                <td>${item?.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item?._id)}
                    className="btn"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
                <td>
                  <div onClick={() => window.my_modal_1.showModal()}>
                    <button onClick={() => setItems(item)} className="btn">
                      Pay
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            <Payment item={items} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;
