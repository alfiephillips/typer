import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Text,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";

import NextLink from "next/link";

import { HamburgerIcon } from "@chakra-ui/icons";

import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
`;

function LinkItem({ href, path, _target, children, ...props }) {
  const active = path === href;

  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? "#88CCCA" : undefined}
        color="black"
        target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
}

export default function Navbar({ path }) {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg="whiteAlpha.200"
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Link href="/">
              <a>
                <LogoBox>
                  <Text
                    color="whiteAlpha.900"
                    fontFamily="'M PLUS Rounded 1c', sans-serif"
                    fontWeight="bold"
                    ml={3}
                  >
                    typer
                  </Text>
                </LogoBox>
              </a>
            </Link>
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/projects" path={path}>
            /help
          </LinkItem>
          <LinkItem href="/newsletter" path={path}>
            /register
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            /login
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>/</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}>/help</MenuItem>
                </NextLink>
                <NextLink href="/newsletter" passHref>
                  <MenuItem as={Link}>/register</MenuItem>
                </NextLink>
                <NextLink href="/contact" passHref>
                  <MenuItem as={Link}>/login</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
