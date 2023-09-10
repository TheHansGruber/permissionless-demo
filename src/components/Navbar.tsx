import { Flex, Spacer, HStack, IconButton, useDisclosure } from "@chakra-ui/react";
import { RepeatIcon } from '@chakra-ui/icons'
import { ConnectButton } from "@rainbow-me/rainbowkit";

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
        <Flex align="center" mr={5} />
        <Spacer />
        <HStack spacing={4}>
            {/* <IconButton icon={<RepeatIcon />}></IconButton> */}
            <ConnectButton />
        </HStack>
      </Flex>
    );
  }
  
  export default Navbar;