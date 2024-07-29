import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { storeToken } from "../../redux/features/authSlice";
import { toast } from "react-toastify";

// Icons
import { FaRegUser } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

import { useRegisterMutation } from "../../redux/services/authApi";

const Signup = () => {
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Register API
  const [registerUser] = useRegisterMutation();

  const submitData = async (data) => {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("image", data.image[0]);

      registerUser(formData)
        .then((response) => {
          toast.success(response?.message);
          dispatch(storeToken(response.token));
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err?.data?.message);
        });
    } catch (error) {
      toast.error(error?.data?.message || error?.message);
      console.log("Registration Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full h-screen grid place-items-center bg-[url('/image/home-bg.jpg')] bg-cover bg-center bg-no-repeat px-4">
      <section className="max-w-[450px] w-full flex items-center justify-center flex-col  bg-white py-[30px] px-[20px] rounded-2xl shadow-lg">
        <h2 className="text-center text-heading-color">Sign Up</h2>
        <form className="w-full mt-6" onSubmit={handleSubmit(submitData)}>
          {/* Name  */}
          <div className="mb-6">
            <div className="w-full h-[50px] bg-light-white flex  rounded-md overflow-hidden">
              <span className="flex-none h-[50px] flex items-center justify-center w-[45px] text-2xl text-content-color">
                <FaRegUser />
              </span>
              <input
                type="text"
                name="name"
                className="flex-1 w-full h-[50px] bg-light-white focus:outline-none text-sm px-1 text-content-color"
                placeholder="Name..."
                {...register("name", {
                  required: "Name is required",
                })}
              />
            </div>
            {errors.name && (
              <p className="block mt-1.5 text-xs text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email  */}
          <div className="mb-6">
            <div className="w-full h-[50px] bg-light-white flex rounded-md overflow-hidden">
              <span className="flex-none h-[50px] flex items-center justify-center w-[45px] text-2xl text-content-color">
                <MdMarkEmailUnread />
              </span>
              <input
                type="text"
                name=" email"
                className="flex-1 w-full h-[50px] bg-light-white focus:outline-none text-sm px-1 text-content-color"
                placeholder="Email..."
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="block mt-1.5 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-5">
            <div className="w-full h-[50px] bg-light-white rounded-md overflow-hidden flex mb-3">
              <span className="flex-none h-[50px] flex items-center justify-center w-[45px] text-2xl text-content-color">
                <RiLockPasswordLine />
              </span>
              <input
                type="password"
                className="flex-1 w-full h-[50px] bg-light-white focus:outline-none text-sm px-1 text-content-color"
                placeholder="Password..."
                name="password"
                {...register("password", {
                  required: "Password is required",
                })}
              />
            </div>
            {errors.password && (
              <p className="block mt-1.5 text-xs text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <div className="image_option">
              <input
                type="file"
                name="image"
                {...register("image", {
                  required: "Image is required",
                })}
              />
            </div>
            {errors.image && (
              <p className="block mt-1.5 text-xs text-red-500">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Submit button  */}
          <div className="mt-5">
            <button type="submit" className="w-full btn-primary">
              {isLoading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Sign Up"
              )}
            </button>
            <p className="mt-2 text-sm text-center">
              <Link to="/login" className=" text-yellow">
                Aready have an account
              </Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Signup;
