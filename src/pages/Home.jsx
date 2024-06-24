import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Divider from "../components/Divider";
import Header from "../components/Header";
import ChatRooms from "../components/ChatRooms";

const Home = () => {
  return (
    <Flex w="100%" h="100vh" justify="center" align="center">
      <Flex w="40%" h="90%" flexDir="column">
        <Header />
        <Divider />
        <ChatRooms />  
      </Flex>
    </Flex>
  );
};

export default Home;
