import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// websocket
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import useWebSocket, { ReadyState } from 'react-use-websocket';
// redux
import { useDispatch, useSelector } from "react-redux";
// components
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Messages from "../components/Messages";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [stompClient, setStompClient] = useState(null);
  const [inputMessage, setInputMessage] = useState("");
  const dispatch = useDispatch();
  // const { messages, loading, error } = useSelector((state) => state.chat);
  // const { sendMessage, lastMessage, readyState } = useWebSocket("http://localhost:8080/ws");

  // const connectionStatus = {
  //   [ReadyState.CONNECTING]: 'Connecting',
  //   [ReadyState.OPEN]: 'Open',
  //   [ReadyState.CLOSING]: 'Closing',
  //   [ReadyState.CLOSED]: 'Closed',
  //   [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  // }[readyState];

  console.log(messages)

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/ws");
    let newStompClient = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        console.log("Connected");
        newStompClient.subscribe("/topic/public", (message) => {
          console.log(message)
          setMessages((prevMessages) => [...prevMessages, { text: message.body }]);
        });
      },
      onDisconnect: () => {
        console.log("Disconnected");
      },
      onStompError: (frame) => {
        console.error("Broker reported error: " + frame.headers["message"]);
        console.error("Additional details: " + frame.body);
      },
    });

    newStompClient.activate();


    setStompClient(newStompClient)

    return () => newStompClient.deactivate();
  }, []);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      stompClient.publish({ destination: "/app/chat.sendMessage", body: inputMessage });
      setInputMessage("");
    }
  };

  return (
    <Flex w="40%" h="90%" flexDir="column">
      {/* <>{connectionStatus}</> */}
      <Messages messages={messages} />
      <Divider />
      <Footer
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleSendMessage={handleSendMessage}
      />
    </Flex>
  );
};

export default ChatPage;
