import { useGetUserByIdQuery } from "../redux/services/authApi";

export const getUser = (id) => {
  console.log("functionid:", id);
  const { data, isLoading } = useGetUserByIdQuery({
    params: {
      id,
    },
  });
  console.log("getUserData", data);
  return { data, isLoading };
};
