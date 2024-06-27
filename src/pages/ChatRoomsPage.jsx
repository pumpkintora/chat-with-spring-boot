import { useState, useEffect } from "react";
import { Container, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// redux
import { getChatRooms } from "../redux/slices/chatroom";
// components
import ChatRooms from "../components/ChatRooms";

const ChatRoomsPage = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth);
  const { rooms } = useSelector((state) => state.chatroom);

  useEffect(() => {
    if (user) dispatch(getChatRooms({ userId: user.userId }))
  }, [user?.userId])

  return (
    <Container maxW={"2xl"} height="100%" centerContent>
      <ChatRooms chatrooms={Object.values(rooms)}/>
    </Container>
  );
};

export default ChatRoomsPage;
