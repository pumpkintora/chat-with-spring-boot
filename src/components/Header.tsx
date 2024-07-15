import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
// redux
import { logoutUser } from "../redux/slices/auth";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleLogout = async () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => navigate("/auth/login"));
  };
  return (
    <>
      <Flex w="100%" p={3} justifyContent={"space-between"}>
        <Flex alignItems="center">
          <Link href="/">
            <Button mr={2}>Home</Button>
          </Link>
          <Button onClick={onOpen}>Create Chat Room</Button>
        </Flex>
        <Flex alignItems="center">
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
          <Button onClick={handleLogout}>LOGOUT</Button>
        </Flex>
      </Flex>
      <ChatRoomModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;
