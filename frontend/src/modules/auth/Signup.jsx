import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { storeToken } from "../../redux/features/authSlice";

// Icons
import { FaRegUser } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

import { useRegisterMutation } from "../../redux/services/authApi";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const [registerUser] = useRegisterMutation();

  const submitData = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("image", data.image[0]);

      await registerUser(formData)
        .unwrap()
        .then((value) => {
          navigate("/login");
          dispatch(storeToken(value.token));
          navigate("/");
          console.log(value.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="w-full h-screen grid place-items-center bg-[url('/image/home-bg.jpg')] bg-cover bg-center bg-no-repeat px-4">
      <section className="max-w-[450px] w-full flex items-center justify-center flex-col  bg-white py-[30px] px-[20px] rounded-2xl shadow-lg">
        <h2 className="text-center text-heading-color">Sign Up</h2>
        <form className="w-full mt-6" onSubmit={handleSubmit(submitData)}>
          {/* Name  */}
          <div className="w-full h-[50px] bg-light-white flex mb-5 rounded-md overflow-hidden">
            <span className="flex-none h-[50px] flex items-center justify-center w-[45px] text-2xl text-content-color">
              <FaRegUser />
            </span>
            <input
              type="text"
              name="name"
              className="flex-1 w-full h-[50px] bg-light-white focus:outline-none text-sm px-1 text-content-color"
              placeholder="Name..."
              {...register("name", { required: true })}
            />
          </div>

          {/* Email  */}
          <div className="w-full h-[50px] bg-light-white flex mb-5 rounded-md overflow-hidden">
            <span className="flex-none h-[50px] flex items-center justify-center w-[45px] text-2xl text-content-color">
              <MdMarkEmailUnread />
            </span>
            <input
              type="text"
              name=" email"
              className="flex-1 w-full h-[50px] bg-light-white focus:outline-none text-sm px-1 text-content-color"
              placeholder="Email..."
              {...register("email", { required: true })}
            />
          </div>

          {/* Password */}
          <div className="w-full h-[50px] bg-light-white rounded-md overflow-hidden flex mb-3">
            <span className="flex-none h-[50px] flex items-center justify-center w-[45px] text-2xl text-content-color">
              <RiLockPasswordLine />
            </span>
            <input
              type="password"
              className="flex-1 w-full h-[50px] bg-light-white focus:outline-none text-sm px-1 text-content-color"
              placeholder="Password..."
              name="password"
              {...register("password", { required: true })}
            />
          </div>
          <div className="image_option">
            <input
              type="file"
              name="image"
              {...register("image", { required: true })}
            />
          </div>

          {/* Submit button  */}
          <div className="mt-5">
            <button type="submit" className="w-full btn-primary">
              Sign Up
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
