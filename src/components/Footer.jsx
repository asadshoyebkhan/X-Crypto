import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc =
  "https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png";

const Footer = () => {
  return (
    <Box
      bgColor={"black"} // Change the background color to complete black (#000000)
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
      w={"100%"} // Set width to 100%
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} fontSize={"1.4rem"}>
            About Us
          </Text>
          <Text fontSize={"1.2rem"} letterSpacing={"widest"} textAlign={["center", "left"]}>
            Welcome to our innovative crypto trading app!
          </Text>
        </VStack>

        {/* <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Founder</Text>
        </VStack> */}
      </Stack>
    </Box>
  );
};

export default Footer;
