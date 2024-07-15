import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// utils
import { isValidToken } from "../utils/token";

export default function AuthGuard({ children }) {
  const { accessToken } = useSelector((state) => state.auth);
  const isAuthenticated = isValidToken(accessToken);

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }
  return <>{children}</>;
}
