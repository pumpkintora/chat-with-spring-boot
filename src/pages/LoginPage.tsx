import React from "react";
import { Flex, Input, Stack, Text, Button, Link } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// redux
import { loginUser } from "../redux/slices/auth";
// components
import PasswordInput from "../components/PasswordInput";

export default function LoginPage(params) {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    dispatch(loginUser({ email, password }))
    .unwrap()
    .then(() => navigate('/'))
    .catch((err) => alert(err))
  };

  return (
    <Flex w="100%" h="100vh" justify="center" align="center">
      <Flex w={"30%"} direction={"column"}>
        <Stack spacing={5} w={"100%"}>
          <Text as="b" fontSize={"3xl"}>
            Hi, Welcome Back
          </Text>
          <Text fontSize={"xl"}>We miss chatting with u 😻</Text>
          <Input
            placeholder="email"
            size="md"
            value={email}
            onChange={handleEmail}
          />
          <PasswordInput
            placeholder={"password"}
            value={password}
            onChange={handlePassword}
          />
          <Button onClick={handleSubmit}>LOGIN</Button>
          <Link href="/auth/register">
            <Text textAlign={"right"} fontSize={"sm"}>
              Don't have an account? Register here
            </Text>
          </Link>
        </Stack>
      </Flex>
    </Flex>
  );
}
