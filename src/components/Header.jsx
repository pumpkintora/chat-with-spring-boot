import React from "react";
import {
  Link,
  Flex,
  Avatar,
  AvatarBadge,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
// components
import ChatRoomModal from "./ChatRoomModal";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex w="100%" justifyContent={"space-between"}>
        <Flex>
          <Link href="/">
            <Button mr={2}>Home</Button>
          </Link>
          <Button onClick={onOpen}>Create Chat Room</Button>
        </Flex>
        <Flex>
          <Avatar
            size="md"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          >
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
          <Flex flexDirection="column" mx="5" justify="center">
            <Text fontSize="sm" fontWeight="bold">
              Ferin Patel
            </Text>
            <Text color="green.500">Online</Text>
          </Flex>
        </Flex>
      </Flex>
      <ChatRoomModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;
