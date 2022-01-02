import Meta from "./Meta";
import { Box, Container } from "@chakra-ui/react";

export default function Layout({ children, router }) {
  return (
    <Box as="main" pb={8}>
      <Meta
        title="Typer"
        description="Typer is a piece of typing test software used to compete with online players."
        url="https://google.com"
        keywords="typing test"
      />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
}
