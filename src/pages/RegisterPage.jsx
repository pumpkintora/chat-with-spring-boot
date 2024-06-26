import React from "react";
import { Text, Flex, Input, Stack, Button, Link } from "@chakra-ui/react";
// components
import PasswordInput from "../components/PasswordInput";

export default function RegisterPage(params) {
  return (
    <Flex w="100%" h="100vh" justify="center" align="center">
      <Flex w={"30%"} justify="center" align="center" direction={"column"}>
        <Stack spacing={5} w={"100%"}>
          <Text as="b" fontSize={"3xl"}>
            Welcome to Chatto
          </Text>
          <Text fontSize={"xl"}>Where people communicate 🌐</Text>
          <Input placeholder="username" size="md" />
          <Input placeholder="email" size="md" />
          <PasswordInput placeholder={"password"} />
          <PasswordInput placeholder={"confirm password"} />
          <Button>REGISTER</Button>
          <Link href="/auth/login">
            <Text textAlign={"right"} fontSize={"sm"}>
              Already have an account? Login here
            </Text>
          </Link>
        </Stack>
      </Flex>
    </Flex>
  );
}
