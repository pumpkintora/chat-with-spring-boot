import React from "react";
import { List, ListItem, Link } from "@chakra-ui/react";

interface StyledListItemProps {
  children: React.ReactNode;
  handleClick: () => void;
}

const StyledListItem: React.FC<StyledListItemProps> = ({
  children,
  handleClick,
}) => {
  return (
    <ListItem
      p={[2, 3]}
      transition={"background-color 0.5s ease"}
      bgColor={"#dde2c6"}
      _hover={{ bgColor: "#bbc5aa", cursor: "pointer" }}
      onClick={handleClick}
    >
      <Link href={`/chat/${children}`}>{children}</Link>
    </ListItem>
  );
};

interface ChatRoom {
  name: string;
  users: {}[];
  messages: {}[];
}

interface ChatRoomsProps {
  chatrooms: [string, ChatRoom][];
  setChatroom: (value: string) => void;
}

const ChatRooms: React.FC<ChatRoomsProps> = ({ chatrooms, setChatroom }) => {
  return (
    <List spacing={3}>
      {chatrooms.map((cr) => (
        <StyledListItem key={cr[0]} handleClick={() => setChatroom(cr[0])}>
          {cr[1].name}
        </StyledListItem>
      ))}
    </List>
  );
};

export default ChatRooms;
