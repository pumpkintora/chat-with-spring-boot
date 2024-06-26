import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";

function isValidToken(accessToken) {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode(accessToken);

  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
}

export default function AuthGuard({ children }) {
  const { accessToken } = useSelector((state) => state.auth);
  const isAuthenticated = isValidToken(accessToken);

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  return <>{children}</>;
}
