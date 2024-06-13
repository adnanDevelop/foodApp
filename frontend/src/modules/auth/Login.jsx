import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// Apis
import {
  useGetUserQuery,
  useLoginMutation,
} from "../../redux/services/authApi";

// Icons
import { MdMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const [login] = useLoginMutation();
  const { data: getData } = useGetUserQuery({});
  console.log(getData);

  const submitData = async (data) => {
    await login(data)
      .unwrap()
      .then(() => {
        alert("login successfully");
        navigate("/");
      })
      .catch(() => {
        alert("Error while logining");
      });
  };

  return (
    <main className="w-full h-screen grid place-items-center bg-[url('/image/home-bg.jpg')] bg-cover bg-center bg-no-repeat px-4">
      <section className="max-w-[450px] w-full h-[380px] flex items-center justify-center flex-col  bg-white py-[30px] px-[20px] rounded-2xl shadow-lg">
        <h2 className="text-center text-heading-color">Sign In</h2>
        <form className="w-full mt-6" onSubmit={handleSubmit(submitData)}>
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
              type="text"
              className="flex-1 w-full h-[50px] bg-light-white focus:outline-none text-sm px-1 text-content-color"
              placeholder="Password..."
              name="password"
              {...register("password", { required: true })}
            />
          </div>

          {/* Submit button  */}
          <div className="mt-5">
            <button type="submit" className="w-full btn-primary">
              Continue
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
