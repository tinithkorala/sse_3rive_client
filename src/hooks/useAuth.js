import { useSelector } from "react-redux";

export const useAuth = () => {
  const { isAuthenticated, user = {} } = useSelector((state) => state.auth);
  return {
    isAuthenticated,
    role: user?.role || "",
    user: user || null,
  };
};
