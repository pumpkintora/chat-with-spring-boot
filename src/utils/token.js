import { jwtDecode } from "jwt-decode";
import axios from "./axios";

export function isValidToken(accessToken) {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode(accessToken);

  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
}

export function handleTokenExpired(exp) {
  const currentTime = Date.now();
  const timeleft = exp * 1000 - currentTime;

  let expiredTimer = setTimeout(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");

    window.location.href = "/auth/login";
  }, timeleft);

  clearTimeout(expiredTimer);
}

export function setSession(accessToken, user) {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("accessToken", JSON.stringify(accessToken));
  const { exp } = jwtDecode(accessToken);
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  handleTokenExpired(exp)
}

export function removeSession() {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    delete axios.defaults.headers.common.Authorization;
}