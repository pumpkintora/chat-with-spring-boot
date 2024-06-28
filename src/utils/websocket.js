import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const WEBSOCKET_URL = "http://localhost:8080/ws";

let stompClient = null;

export const connect = (onMessageReceived) => {
  const socket = new SockJS(WEBSOCKET_URL);
  stompClient = new Client({
    webSocketFactory: () => socket,
    onConnect: () => {
      console.log("Connected");
      stompClient.subscribe("/topic/messages", (message) => {
        onMessageReceived(JSON.parse(message.body));
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

  stompClient.activate();
};

export const disconnect = () => {
  if (stompClient !== null) {
    stompClient.deactivate();
  }
  console.log("Disconnected");
};
