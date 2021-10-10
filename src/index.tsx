import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "jotai";
import { QueryClient, QueryClientProvider } from "react-query";

import "@fontsource/be-vietnam-pro";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Loading from "./scenes/Loading";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        </ChakraProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
