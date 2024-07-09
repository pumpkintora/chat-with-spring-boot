import { useEffect, useState, createContext } from "react";
// websocket
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const WebSocketContext = createContext();

const WebSocketProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [stompClient, setStompClient] = useState(null);

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/ws");
    let newStompClient = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        console.log("Connected");
        newStompClient.subscribe("/topic/public", (message) => {
          console.log(message);
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: message.body },
          ]);
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

    setStompClient(newStompClient);

    return () => newStompClient.deactivate();
  }, []);

  const handleSendMessage = (inputMessage, chatroomId, userId) => {
    return stompClient.publish({
      destination: "/app/chat.sendMessage",
      body: JSON.stringify({
        chatroomId,
        userId,
        content: inputMessage,
        timestamp: new Date().toISOString(),
      }),
    });
  };

  return (
    <WebSocketContext.Provider
      value={{
        handleSendMessage,
      }}
    >
      {children}
    </WebSocketContext.Provider>
  );
};

export { WebSocketContext, WebSocketProvider };
