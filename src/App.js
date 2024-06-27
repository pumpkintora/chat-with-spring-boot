import { useEffect } from "react";
// redux
import { logoutUser } from "./redux/slices/auth";
// utils
import { isValidToken, removeSession, setSession } from "./utils/token";
// routes
import Router from "./routes";

const App = () => {
  return <Router />;
};

export default App;
