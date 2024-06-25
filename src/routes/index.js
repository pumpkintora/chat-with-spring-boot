import { useRoutes } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ChatRoomsPage from "../pages/ChatRoomsPage";
import ChatPage from "../pages/ChatPage";

export default function Router() {
  return useRoutes([
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "chatrooms",
      element: (
        <AuthGuard>
          <ChatRoomsPage />
        </AuthGuard>
      ),
    },
    {
      path: "chat/:id",
      element: (
        <AuthGuard>
          <ChatPage />
        </AuthGuard>
      ),
    },
    {
      path: "/",
      element: <Navigate to="/chatrooms" replace />,
    },
  ]);
}
