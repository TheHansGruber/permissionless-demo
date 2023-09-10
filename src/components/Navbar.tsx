import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Box, Flex, Spacer, Link, Text, VStack, HStack, Button, IconButton, useDisclosure } from "@chakra-ui/react";

export function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        p={4}
        bg="#white"
        color="black"
      >
        <Flex align="center" mr={5}>
          {/* <Text fontSize="xl" fontWeight="bold">
            Base Starter App
          </Text> */}
        </Flex>
        <Spacer />
  
        <HStack spacing={4}>
            <ConnectButton />
        </HStack>
      </Flex>
    );
  }
  
  export default Navbar;