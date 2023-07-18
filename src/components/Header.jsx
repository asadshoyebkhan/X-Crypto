import React from "react";
import { Button, Center, HStack, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Center bgColor={"#000000"}>
      <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} justifyContent="space-between" width="100%">
        <HStack>

          <Button variant={"unstyled"} color={"white"} _hover={{ border: "1px solid white" }}>
            <Link to="/" style={{ fontSize: "1.4rem" }}>Home</Link>
          </Button>

          <Button variant={"unstyled"} color={"white"} _hover={{ border: "1px solid white" }}>
            <Link to="/exchanges" style={{ fontSize: "1.4rem" }}>Exchanges</Link>
          </Button>

          <Button variant={"unstyled"} color={"white"} _hover={{ border: "1px solid white" }}>
            <Link to="/coins" style={{ fontSize: "1.4rem" }}>Coins</Link>
          </Button>

        </HStack>

        <HStack>

          <Button variant={"unstyled"} color={"white"} _hover={{ border: "1px solid white" }}>
            <Link to="/login" style={{ fontSize: "1.4rem" }}>Login</Link>
          </Button>

          <Button variant={"unstyled"} color={"white"} _hover={{ border: "1px solid white" }}>
            <Link to="/signup" style={{ fontSize: "1.4rem" }}>Sign Up</Link>
          </Button>

        </HStack>
      </HStack>
    </Center>
  );
};

export default Header;
