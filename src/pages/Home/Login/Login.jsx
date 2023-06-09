import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/Ai";
import { TbFidgetSpinner } from "react-icons/Tb";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Login = () => {
  const { loading, setLoading, signIn, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [passwordEye, setPasswordEye] = useState(false);

  const from = location.state?.from?.pathname || "/";

  // Handle submit
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  // Handle google signin
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
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

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:w-7/12 p-6 rounded-md sm:p-10 bg-cyan-50 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
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
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/,
                })}
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#5FC7AE] bg-white text-gray-900"
              />
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
                  Password must have one uppercase one lowercase and one special
                  character
                </p>
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
                "Login"
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
          Don't have an account yet?{" "}
          <Link
            to="/signup"
            className="hover:underline hover:text-[#5FC7AE] text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
