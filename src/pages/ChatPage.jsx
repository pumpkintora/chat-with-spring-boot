import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
// components
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Messages from "../components/Messages";

const ChatPage = () => {
  const [inputMessage, setInputMessage] = useState("");
  const dispatch = useDispatch();
  // const { messages, loading, error } = useSelector((state) => state.chat);

  // const handleSendMessage = () => {
  //   if (!inputMessage.trim().length) {
  //     return;
  //   }
  //   const data = inputMessage;

  //   const chatMessage = {
  //     userId: 1, // replace with actual user ID
  //     chatRoomId: 1, // replace with actual chat room ID
  //     content: data,
  //     timestamp: new Date().toISOString(),
  //   };
  //   dispatch(sendMessage(chatMessage));
  //   setInputMessage("");
  // };

  return (
    <Flex w="40%" h="90%" flexDir="column">
      chat messages
      {/* <Messages messages={messages} />
      <Divider />
      <Footer
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleSendMessage={handleSendMessage}
      /> */}
    </Flex>
  );
};

export default ChatPage;
