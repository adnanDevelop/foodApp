/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { Modal } from "../../../components/ui/index";

// Icons
import { GoAlertFill } from "react-icons/go";
const DeleteModal = ({
  deleteAccount,
  deleteAccountDetails,

  id,
}) => {
  const dispatch = useDispatch();

  return (
    <Modal id={id}>
      <div className="modal-box w-[400px] text-center">
        <div className="w-[70px] h-[70px] mx-auto rounded-full grid place-items-center bg-red-100">
          <GoAlertFill className="text-[30px] text-red-500" />
        </div>
        <h3 className="text-lg font-bold text-center text-[30px] text-heading-color mt-4">
          Delete Account
        </h3>
        <p className="mt-3 leading-5 text-content-color">
          You&apos;re going to delete your account. Are you sure?
        </p>
        <div className="flex items-center justify-center w-full modal-action">
          <button
            className="px-[30px] h-[40px] rounded-lg bg-gray-200 text-content-color font-medium transitions hover:scale-105 text-sm"
            onClick={() =>
              document.getElementById("DeleteAccountModal").close()
            }
          >
            No, Keep it.
          </button>
          <button
            type="submit"
            className="px-[30px] h-[40px] rounded-lg bg-red-500 text-white font-medium transitions hover:scale-105 text-sm"
            onClick={() => {
              dispatch(deleteAccountDetails());
              deleteAccount();
            }}
          >
            Yes, Delete it!
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
