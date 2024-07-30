import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

// Redux
import { useGetLoggedInUserQuery } from "../../../redux/services/authApi";

import { useUpdateUserMutation } from "../../../redux/services/authApi";

// Icons
import { FaLock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const UserProfileForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Update api
  const [updateUser] = useUpdateUserMutation();
  const { data } = useGetLoggedInUserQuery();

  console.log("beforeData", data);

  const updateProfile = async (formData) => {
    setLoading(true);
    console.log("form data", formData);
    try {
      await updateUser({
        id: data?.data?._id,
        body: formData,
      })
        .unwrap()
        .then((response) => {
          toast.success(response?.message);
          reset();
        })
        .catch((err) => {
          toast.error(err?.data?.message);
        });
    } catch (error) {
      toast.error(error?.data?.message);
      console.log("Error while updating user:", error?.message);
    } finally {
      setLoading(false);
      console.log("afterData", data);
    }
  };

  return (
    <section className="px-[18px] py-[30px] bg-light-white">
      <div className="line_animation w-[100px] h-[2px] bg-gray-200 mb-1 overflow-hidden shadow-md">
        <div className="bg-orange w-[40px] h-full animate-progress"></div>
      </div>
      <h3 className="mt-2 font-semibold text-heading-color">Change Profile</h3>

      {/* Form section */}
      <form className="w-full mt-6" onSubmit={handleSubmit(updateProfile)}>
        {/* username input */}
        <div className="w-full p-4 mb-4 bg-white ">
          <div className=" mb-1.5 gap-x-2 flex items-center">
            <FaRegUser className="text-lg text-yellow" />
            <label htmlFor="name" className="font-semibold text-heading-color">
              Name:
            </label>
          </div>
          <input
            type="text"
            className="w-full h-[50px] bg-light-white focus:outline-none px-2 rounded-md text-sm"
            placeholder={data?.data && data?.data?.name}
            name="name"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors?.name && (
            <p className="block mt-1.5 text-xs text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* email input */}
        <div className="w-full p-4 mb-4 bg-white ">
          <div className=" mb-1.5 gap-x-2 flex items-center">
            <MdEmail className="text-lg text-yellow" />
            <label htmlFor="email" className="font-semibold text-heading-color">
              Email:
            </label>
          </div>
          <input
            type="email"
            className="w-full h-[50px] bg-light-white focus:outline-none px-2 rounded-md text-sm"
            placeholder={data?.data && data?.data?.email}
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors?.email && (
            <p className="block mt-1.5 text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2">
          {/* Current password input */}
          <div className="p-4 bg-white ">
            <div className=" mb-1.5 gap-x-2 flex items-center">
              <FaLock className="text-lg text-yellow" />
              <label
                htmlFor="name"
                className="font-semibold text-heading-color"
              >
                Current Password:
              </label>
            </div>
            <input
              type="password"
              className="w-full h-[50px] bg-light-white focus:outline-none px-2 rounded-md text-sm"
              placeholder={data?.data && data?.data?.password}
              name="currentPassword"
              {...register("currentPassword", {
                required: "Password is required",
                min: 8,
              })}
              onFocus={(e) => (e.target.type = "text")}
              onBlur={(e) => (e.target.type = "password")}
            />
            {errors?.currentPassword && (
              <p className="block mt-1.5 text-xs text-red-500">
                {errors.currentPassword.message}
              </p>
            )}
          </div>

          {/* New password input */}
          <div className="p-4 bg-white ">
            <div className=" mb-1.5 gap-x-2 flex items-center">
              <FaLock className="text-lg text-yellow" />
              <label
                htmlFor="name"
                className="font-semibold text-heading-color"
              >
                New Password:
              </label>
            </div>
            <input
              type="password"
              className="w-full h-[50px] bg-light-white focus:outline-none px-2 rounded-md text-sm"
              placeholder="Enter a new password"
              name="newPassword"
              {...register("newPassword", {
                required: "Password is required",
                min: 8,
              })}
              onFocus={(e) => (e.target.type = "text")}
              onBlur={(e) => (e.target.type = "password")}
            />
            {errors?.newPassword && (
              <p className="block mt-1.5 text-xs text-red-500">
                {errors.newPassword.message}
              </p>
            )}
          </div>
        </div>

        {/* submit button */}
        <div className="mt-8">
          <button type="submit" className="capitalize btn-primary">
            {loading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              "Upload Profile"
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default UserProfileForm;
