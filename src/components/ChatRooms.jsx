import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

const StyledListItem = ({ children }) => {
  return (
    <ListItem
      p={[2, 3]}
      transition={"background-color 0.5s ease"}
      bgColor={"#dde2c6"}
      _hover={{ bgColor: "#bbc5aa", cursor: "pointer" }}
    >
      {children}
    </ListItem>
  );
};

const ChatRooms = () => {
  return (
    <List spacing={3}>
      <StyledListItem>Lorem ipsum dolor sit amet</StyledListItem>
      <StyledListItem>Consectetur adipiscing elit</StyledListItem>
      <StyledListItem>Integer molestie lorem at massa</StyledListItem>
      <StyledListItem>Facilisis in pretium nisl aliquet</StyledListItem>
    </List>
  );
};

export default ChatRooms;
