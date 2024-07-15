import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as ReduxProvider } from "react-redux";
// context
import { WebSocketProvider } from "./context/WebSocketProvider";
import "./index.css";
import App from "./App";
import { persistor, store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <WebSocketProvider>
            <App />
          </WebSocketProvider>
        </BrowserRouter>
      </ChakraProvider>
    </PersistGate>
  </ReduxProvider>
);
