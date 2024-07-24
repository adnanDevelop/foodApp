import { useSelector } from "react-redux";
import { useGetUserByIdQuery } from "../redux/services/authApi";

export const getUser = () => {
  const userId = useSelector((state) => state?.auth?.loggedInUserId);

  const { data, isLoading } = useGetUserByIdQuery(userId);
  return { data, isLoading };
};
