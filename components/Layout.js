import Meta from "./Meta";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function Layout({ children, router }) {
  return (
    <Box as="main" pb={8}>
      <Meta
        title="Typer"
        description="Typer is a piece of typing test software used to compete with online players."
        url="https://google.com"
        keywords="typing test"
      />
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
}
