import React from "react";
import { Container, Flex, Divider } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// redux
import { getChatRooms } from "../redux/slices/chatroom";
import { IRootState } from "../redux/rootReducer";
// components
import ChatRooms from "../components/ChatRooms";
import Chat from "../components/Chat";

const ChatRoomsPage = () => {
  const [chatroom, setChatroom] = React.useState<number>(0);
  const dispatch = useDispatch();
  const { user } = useSelector((state: IRootState) => state.auth);
  const { rooms } = useSelector((state: IRootState) => state.chatroom);

  React.useEffect(() => {
    if (user) dispatch(getChatRooms({ userId: user.userId }));
  }, [user?.userId]);

  return (
    <Flex w={"100%"} h={"100%"} direction={"row"}>
      <Flex flexGrow={1}>
        <ChatRooms
          chatrooms={Object.entries(rooms)}
          setChatroom={setChatroom}
        />
      </Flex>
      <Flex flexGrow={3}>
        <Chat chatroom={chatroom} />
      </Flex>
    </Flex>
  );
};

export default ChatRoomsPage;
