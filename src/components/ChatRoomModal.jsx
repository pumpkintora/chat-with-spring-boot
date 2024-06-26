
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import axios from "../utils/axios";

function ChatRoomModal({ isOpen, onClose }) {
  const [name, setName] = React.useState('')
  const { user } = useSelector(state => state.auth)
  const handleCreate = async () => {
    axios.post(`/chatroom?name=${name}&email=${user.email}`)
      .then((res) => console.log(res.data))
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a New Chat Room</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={3}>
            <Input variant="filled" placeholder="Chat Name" value={name} onChange={(e) => setName(e.target.value)} />
            {/* <Select variant='filled' placeholder='Select Users' />             */}
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={handleCreate}>Create</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ChatRoomModal;
