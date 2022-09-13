import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/roboto/400.css"; 

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
