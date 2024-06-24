import { Flex } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Header from "./components/Header";
import Divider from "./components/Divider";
// pages
import Chat from "./pages/Chat";
import Home from "./pages/Home";

const App = () => {
  return (
    <Flex w="100%" h="100vh" justify="center" align="center">
      <Flex w="40%" h="90%" flexDir="column">
        <Header />
        <Divider />
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat/:id" element={<Chat />} />
            </Routes>
          </div>
        </Router>
      </Flex>
    </Flex>
  );
};

export default App;
