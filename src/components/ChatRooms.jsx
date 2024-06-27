import { List, ListItem, Link } from "@chakra-ui/react";

const StyledListItem = ({ children }) => {
  return (
    <ListItem
      p={[2, 3]}
      transition={"background-color 0.5s ease"}
      bgColor={"#dde2c6"}
      _hover={{ bgColor: "#bbc5aa", cursor: "pointer" }}
    >
      <Link href={`/chat/${children}`}>{children}</Link>
    </ListItem>
  );
};

const ChatRooms = ({ chatrooms }) => {
  return (
    <List spacing={3}>
      {chatrooms.map(cr => <StyledListItem>{cr.name}</StyledListItem>)}
    </List>
  );
};

export default ChatRooms;
