import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useAuth();
  const status = "pending";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    const image = event.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;

        const saveClasses = {
          className: data.className,
          instructorName: data.instructorName,
          instructorEmail: data.instructorEmail,
          availableSeats: data.availableSeats,
          price: data.price,
          image: imageUrl,
          status: data.pending,
        };
        console.log(saveClasses);

        fetch("https://yoga-zone-server.vercel.app/classes", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(saveClasses),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              event.target.reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Added class successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      });
  };

  return (
    <div className="w-full px-7">
      <h2 className="text-2xl font-semibold my-5 text-center">Add a Class</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto w-8/12 space-y-3">
          <div>
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              {...register("className", { required: true })}
              placeholder="Enter class name"
              className="input border border-[#5FC7AE] focus:outline-none w-full"
            />
            {errors.className?.type === "required" && (
              <p className="text-red-500">Class name is required</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              type="text"
              {...register("instructorName", { required: true })}
              defaultValue={user?.displayName}
              placeholder="Enter instructor name"
              className="input border border-[#5FC7AE] focus:outline-none w-full"
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <input
              type="text"
              {...register("instructorEmail", { required: true })}
              defaultValue={user?.email}
              placeholder="Enter instructor email"
              className="input border border-[#5FC7AE] focus:outline-none w-full"
            />
          </div>
          <div className="flex gap-5">
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                {...register("price", { required: true })}
                placeholder="price"
                className="input border border-[#5FC7AE] focus:outline-none w-full"
              />
              {errors.price?.type === "required" && (
                <p className="text-red-500">Price is required</p>
              )}
            </div>
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Available Seats</span>
              </label>
              <input
                type="text"
                {...register("availableSeats", { required: true })}
                placeholder="Enter available seats"
                className="input border border-[#5FC7AE] focus:outline-none w-full"
              />
              {errors.availableSeats?.type === "required" && (
                <p className="text-red-500">Price is required</p>
              )}
            </div>
          </div>
          <div className="pt-3">
            <input
              type="file"
              name="image"
              {...register("image", { required: true })}
              className="file-input w-full max-w-xs bg-gray-300 hover:bg-gray-300"
            />
            {errors.image?.type === "required" && (
              <p className="text-red-500">Image is required</p>
            )}
          </div>
          <input
            type="hidden"
            defaultValue={status}
            {...register("pending", { required: true })}
          />
          <div className="pt-3">
            <input
              type="submit"
              className="btn w-full text-white bg-[#5FC7AE] hover:bg-[#5FC7AE]"
              value="Add Class"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
