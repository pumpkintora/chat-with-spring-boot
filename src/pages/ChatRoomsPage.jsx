import React, { useState } from "react";
import { Container, Flex } from "@chakra-ui/react";
import ChatRooms from "../components/ChatRooms";

const ChatRoomsPage = () => {
  return (
    <Container maxW={"2xl"} height="100%" centerContent>
      <ChatRooms />
    </Container>
  );
};

export default ChatRoomsPage;
