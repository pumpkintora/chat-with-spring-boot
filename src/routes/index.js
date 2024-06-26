import { useRoutes, Navigate } from "react-router-dom";
// layout
import NavbarLayout from '../layout/NavbarLayout'
// guard
import AuthGuard from "../guard/AuthGuard";
// pages
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
          <NavbarLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: "",
          element: <ChatRoomsPage />,
          index: true,
        }
      ]
    },
    {
      path: "chat/:id",
      element: (
        <AuthGuard>
          <NavbarLayout />
        </AuthGuard>
      ),
      children: [
        {
          element: <ChatPage />,
          index: true,
        }
      ]
    },
    {
      path: "/",
      element: <Navigate to="/chatrooms" replace />,
    },
  ]);
}
