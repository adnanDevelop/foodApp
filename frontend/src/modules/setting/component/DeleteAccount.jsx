import { toast } from "react-toastify";
import { deleteAccountDetails } from "../../../redux/features/authSlice";

// Apis
import { getUser } from "../../../utils/getUser";
import { useDeleteUserMutation } from "../../../redux/services/authApi";

import DeleteModal from "./DeleteModal";

const DeleteAccount = () => {
  const userData = getUser();

  const [deleteUser] = useDeleteUserMutation();

  // Delete User function
  const deleteAccount = async () => {
    try {
      await deleteUser({ id: userData?.data?.data?._id })
        .unwrap()
        .then((response) => {
          toast.success(response?.message);
        })
        .catch((err) => {
          toast.error(err?.data?.message);
        });
    } catch (err) {
      console.log("Error while delete account", err);
    }
  };

  return (
    <section className="px-[18px] py-[30px] bg-light-white">
      <div className="line_animation w-[100px] h-[2px] bg-gray-200 mb-1 overflow-hidden shadow-md">
        <div className="bg-orange w-[40px] h-full animate-progress"></div>
      </div>
      <h3 className="mt-2 font-semibold text-heading-color">Setting</h3>

      {/* Toggler buttons */}
      <div className="p-5 mt-3 bg-white rounded-md">
        <div className="flex items-center justify-between pb-4 border-b  mb-2 border-b-[#e8e8e8ff]">
          <p className="mb-0 text-lg font-normal leading-none text-content-color">
            Offer Update
          </p>
          <input
            type="checkbox"
            className={`toggle bg-[#F2A93E] !border-[#F2A93E] !toggle-warning hover:bg-[#F2A93E]`}
            defaultChecked
          />
        </div>
        <div className="flex items-center justify-between pb-4  bg-white border-b  mb-2 border-b-[#e8e8e8ff]">
          <p className="mb-0 text-lg font-normal leading-none text-content-color">
            Order Update
          </p>
          <input
            type="checkbox"
            className={`toggle bg-[#F2A93E] !border-[#F2A93E] !toggle-warning hover:bg-[#F2A93E]`}
          />
        </div>
        <div className="flex items-center justify-between bg-white">
          <p className="mb-0 text-lg font-normal leading-none text-content-color">
            New Update
          </p>
          <input
            type="checkbox"
            className={`toggle bg-[#F2A93E] !border-[#F2A93E] !toggle-warning hover:bg-[#F2A93E]`}
          />
        </div>
      </div>

      {/* Delete account information */}
      <div className="mt-6">
        <h3 className="mt-2 mb-4 !font-poppin font-semibold text-heading-color">
          Delete Your Account
        </h3>

        {/* Information */}
        <div>
          <h3 className="text-lg font-normal !font-poppin text-heading-color">
            Hi{" "}
            <span className="font-semibold">
              {userData?.data ? userData?.data?.data?.name : "Mark Jecno"}
            </span>
            ,
          </h3>
          <p className="mb-4 text-content-color">
            We are sorry to here you would like to delete your account.
          </p>

          {/* Note */}
          <div>
            <h3 className="text-lg font-semibold !font-poppin text-heading-color">
              Note :
            </h3>
            <p className="mt-1.5 text-justify text-content-color">
              Deleting your account will permanently remove your profile,
              personal settings, and all other associated information. once your
              account is deleted, you will be logged out and will be unable to
              log back in.
            </p>
            <p className="mt-1.5 text-justify text-content-color mb-4">
              If you understand and agree to the above statement, and would
              still like to delete your account, than click below
            </p>

            {/* Delete Account btn */}
            <button
              type="button"
              className="btn-rounded-sm h-[42px] px-[20px] text-sm "
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>

      {/* Delete Account Modal */}
      <DeleteModal
        deleteAccount={deleteAccount}
        deleteAccountDetails={deleteAccountDetails}
      />
    </section>
  );
};

export default DeleteAccount;
