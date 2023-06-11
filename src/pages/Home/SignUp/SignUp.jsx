import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/Ai";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { TbFidgetSpinner } from "react-icons/Tb";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const {
    loading,
    setLoading,
    createUser,
    signInWithGoogle,
    updateUserProfile,
    logOut,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [passwordEye, setPasswordEye] = useState(false);
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const emailRef = useRef();
  // Handle submit
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const pwd = watch("password");
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

        createUser(data.email, data.password)
          .then((result) => {
            updateUserProfile(data.name, imageUrl)
              .then(() => {
                const saveUser = { name: data.name, email: data.email };

                fetch("http://localhost:5000/users", {
                  method: "POST",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify(saveUser),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.insertedId) {
                      toast.success("Successfully created new user");
                      // navigate(from, { replace: true });
                      logOut()
                        .then((result) => {
                          navigate("/login");
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }
                  });
              })
              .catch((err) => {
                setLoading(false);
                console.log(err.message);
                toast.error(err.message);
              });
          })
          .catch((err) => {
            setLoading(false);
            console.log(err.message);
            toast.error(err.message);
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
    return;
  };

  // Handle google signin
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
        };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            navigate(from, { replace: true });
          });

        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };
  const handleConfirmPasswordClick = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:w-7/12 p-6 rounded-md sm:p-10 bg-cyan-50 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to Yoga Zone</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#5FC7AE] bg-white text-gray-900"
                data-temp-mail-org="0"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#5FC7AE] bg-white text-gray-900"
                data-temp-mail-org="0"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="relative">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>

              <input
                type={passwordEye === false ? "password" : "text"}
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#5FC7AE] bg-white text-gray-900"
              />
              {/* eye option */}
              <span className="text-2xl absolute right-5 top-9">
                {passwordEye === false ? (
                  <AiFillEyeInvisible
                    onClick={handlePasswordClick}
                    className="cursor-pointer"
                  />
                ) : (
                  <AiFillEye
                    onClick={handlePasswordClick}
                    className="cursor-pointer"
                  />
                )}
              </span>

              {errors.password?.type === "required" && (
                <span className="text-red-600">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 12 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one uppercase one lower case, one number
                  and one special characters and less than 12 characters
                </p>
              )}
            </div>
            <div className="relative">
              <label htmlFor="confirmPassword" className="block mb-2 text-sm">
                Confirm Password
              </label>
              <input
                type={confirmPasswordEye === false ? "password" : "text"}
                // name="confirmPassword"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === pwd || "The passwords do not match",
                })}
                placeholder="*******"
                className="relative w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#5FC7AE] bg-white text-gray-900"
                data-temp-mail-org="0"
              />
              {/* eye option */}
              <span className="text-2xl absolute right-5 top-9">
                {confirmPasswordEye === false ? (
                  <AiFillEyeInvisible
                    onClick={handleConfirmPasswordClick}
                    className="cursor-pointer"
                  />
                ) : (
                  <AiFillEye
                    onClick={handleConfirmPasswordClick}
                    className="cursor-pointer"
                  />
                )}
              </span>
              {errors.confirmPassword && (
                <span className="text-red-600">The passwords do not match</span>
              )}
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                {...register("image", { required: true })}
                name="image"
                accept="image/*"
              />
              {errors.image && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#5FC7AE] w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner className="m-auto animate-spin" size={24} />
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
        <div className="space-y-1">
          <button
            // onClick={handleReset}
            className="text-xs hover:underline hover:text-[#5FC7AE] text-gray-400"
          >
            Forgot password?
          </button>
        </div>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-[#5FC7AE] text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
