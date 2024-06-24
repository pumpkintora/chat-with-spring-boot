import { ChakraProvider, theme } from "@chakra-ui/react";
import Chat from "./pages/Chat";
import Home from "./pages/Home";

const App = () => {
  return (
	<ChakraProvider theme={theme}>
		{/* <Chat /> */}
		<Home />
	</ChakraProvider>
  );
};

export default App;