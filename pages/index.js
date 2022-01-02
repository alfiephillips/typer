import { Box, Container, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2">typer</Heading>
        </Box>
      </Box>
    </Container>
  );
}
