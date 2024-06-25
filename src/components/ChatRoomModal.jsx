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

function ChatRoomModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a New Chat Room</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={3}>
            <Input variant="filled" placeholder="Chat Name" />
            <Select variant='filled' placeholder='Select Users' />            
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost">Create</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ChatRoomModal;
