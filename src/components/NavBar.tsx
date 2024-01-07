import { Image, HStack, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack>
      <Text fontSize="3xl" as="b" m={2}>
        Celestial Technologies
        <Text fontSize="3xl" as="b" color="red">
          .
        </Text>
      </Text>
    </HStack>
  );
};

export default NavBar;
