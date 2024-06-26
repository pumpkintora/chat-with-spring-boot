import React from "react";
import {
  Input,
  InputRightElement,
  InputGroup,
  IconButton,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export default function PasswordInput({ placeholder, value, onChange }) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <InputGroup>
      <Input
        type={show ? "text" : "password"}
        placeholder={placeholder}
        size="md"
        value={value}
        onChange={onChange}
      />
      <InputRightElement width="4.5rem">
        <IconButton
          h="1.75rem"
          size="sm"
          isRound
          onClick={handleClick}
          icon={show ? <ViewOffIcon /> : <ViewIcon />}
        />
      </InputRightElement>
    </InputGroup>
  );
}
