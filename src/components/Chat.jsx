import { Box } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
// context
import { WebSocketContext } from "../context/WebSocketProvider";
// redux
import { useDispatch, useSelector } from "react-redux";
import { addMessageToRoom } from "../redux/slices/chatroom";
// components
import Divider from "./Divider";
import Footer from "./Footer";
import Header from "./Header";
import Messages from "./Messages";

const Chat = ({ chatroom }) => {
  const { handleSendMessage } = useContext(WebSocketContext);
  const { user } = useSelector((state) => state.auth);
  const [inputMessage, setInputMessage] = useState("");
  const dispatch = useDispatch();

  const sendMessage = async (inputMessage) => {
    if (inputMessage.trim()) {
      const res = await handleSendMessage(inputMessage.trim(), chatroom, user.userId);
      dispatch(
        addMessageToRoom({
          roomId: chatroom,
          message: {
            userId: user.userId,
            content: inputMessage.trim(),
            timestamp: new Date().toISOString(),
          },
        })
      );
      console.log(res);
    }
  };

  return (
    <Box w={"100%"} h={"100%"}>
      {/* <>{connectionStatus}</> */}
      <Messages messages={[]} />
      <Divider />
      <Footer
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        sendMessage={sendMessage}
      />
    </Box>
  );
};

export default Chat;
