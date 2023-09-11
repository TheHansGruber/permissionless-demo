import { useState } from 'react'
import { Heading, Input, Text, VStack, HStack, Button } from "@chakra-ui/react";
import { useWaitForTransaction, useAccount } from "wagmi";
import { useMyNftSetBackgroundColor, usePrepareMyNftSetBackgroundColor } from "../generated";

export function BackgroundEditBox() {
  
  const [color1, setColor1] = useState("");

  const handleClick = () => {
    write?.()
  };

  const handleChangeColor1 = (event) => {
    setColor1(event.target.value)
  };

  const { isConnected } = useAccount()

  const { config } = usePrepareMyNftSetBackgroundColor({
      args: [color1],
    });

  const { data, write } = useMyNftSetBackgroundColor({
      ...config,
      onSuccess: () => { },
  });
  
  const { isLoading } = useWaitForTransaction({
      hash: data?.hash,
      onSuccess: () => { },
  });

    return (
      <VStack minHeight="250" display='flex' alignItems='baseline' borderColor="black" borderWidth="1px" borderRadius="md" p={3}>
      <Heading size="md">Background</Heading>
      <HStack>
        <Text>Color #1</Text>
        <Input variant='outline' maxW={32} placeholder='#000000' value={color1} onChange={handleChangeColor1} isDisabled={isLoading || !isConnected}   />
      </HStack>
      <Button isDisabled={!color1 || isLoading || !isConnected || !write} onClick={handleClick} marginTop={2} size="md" colorScheme='messenger' variant='solid'>Update</Button>
    </VStack>
    );
}