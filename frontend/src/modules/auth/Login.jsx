import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { storeToken } from "../../redux/features/authSlice";
import { toast } from "react-toastify";

// Apis
import { useLoginMutation } from "../../redux/services/authApi";

// Icons
import { MdMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";

const Login = () => {
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Login API
  const [loginUser] = useLoginMutation();

  const submitData = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const response = await loginUser(data).unwrap();
      toast.success(response.message);
      dispatch(storeToken(response));
      navigate("/");
    } catch (error) {
      toast.error(error?.data?.message);
      console.error("Login Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full h-screen grid place-items-center bg-[url('/image/home-bg.jpg')] bg-cover bg-center bg-no-repeat px-4">
      <section className="max-w-[450px] w-full min-h-[380px]  flex items-center justify-center flex-col  bg-white p-[20px]  rounded-2xl shadow-lg">
        <h2 className="text-center text-heading-color">Sign In</h2>
        <form className="w-full mt-6" onSubmit={handleSubmit(submitData)}>
          <div className="mb-6">
            <div className="w-full h-[50px] bg-light-white flex  rounded-md overflow-hidden">
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
          <div className="mb-6">
            <div className="w-full h-[50px] bg-light-white rounded-md overflow-hidden flex  mt-4">
              <span className="flex-none h-[50px] flex items-center justify-center w-[45px] text-2xl text-content-color">
                <RiLockPasswordLine />
              </span>
              <input
                type="password"
                className="flex-1 w-full h-[50px] bg-light-white focus:outline-none text-sm px-1 text-content-color"
                placeholder="Password..."
                name="password"
                {...register("password", {
                  pattern: {
                    message: "Password  must  be at least 8 characters long",
                  },
                  required: "Password is required",
                })}
                onFocus={(e) => {
                  e.target.type = "text";
                }}
                onBlur={(e) => {
                  e.target.type = "password";
                }}
              />
            </div>
            {errors.password && (
              <p className="block text-xs text-red-500 mt-1.5">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit button  */}
          <div className="mt-5">
            <button type="submit" className="w-full btn-primary">
              {isLoading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Sign In"
              )}
            </button>
            <p className="mt-2 text-sm text-center">
              Or{" "}
              <Link to="/signup" className=" text-yellow">
                create an account
              </Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
