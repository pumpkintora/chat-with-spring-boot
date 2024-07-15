import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Divider from "../components/Divider";

export default function NavbarLayout(params) {
  return (
    <Flex w={'100%'} h={'100vh'} justify="center" align="center" flexDir={'column'}>
      <Header />
      <Divider />
      <Outlet />
    </Flex>
  );
}
