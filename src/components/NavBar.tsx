import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" m={2}>
      <Text fontSize="3xl" as="b" m={2}>
        Celestial Technologies
        <Text fontSize="3xl" as="b" color="red">
          .
        </Text>
      </Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
