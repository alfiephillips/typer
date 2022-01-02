import { ChakraProvider } from "@chakra-ui/react";

import theme from "../utils/theme";
import Layout from "../components/Layout";
import Fonts from "../components/Fonts";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
