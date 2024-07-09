import { List, ListItem, Link, Box } from "@chakra-ui/react";

const StyledListItem = ({ children, handleClick }) => {
  return (
    <ListItem
      p={[2, 3]}
      transition={"background-color 0.5s ease"}
      bgColor={"#dde2c6"}
      _hover={{ bgColor: "#bbc5aa", cursor: "pointer" }}
      onClick={handleClick}
    >
      <Link>{children}</Link>
    </ListItem>
  );
};

const ChatRooms = ({ chatrooms, setChatroom }) => {
  return (
    <Box w={"100%"} h={"100%"} borderRight={"1px solid grey"} p={5}>
      <List spacing={3}>
        {chatrooms.map((cr) => (
          <StyledListItem handleClick={() => setChatroom(cr[0])}>
            {cr[1].name}
          </StyledListItem>
        ))}
      </List>
    </Box>
  );
};

export default ChatRooms;
