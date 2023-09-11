import { useState } from 'react'
import { Heading, Input, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Text, VStack, HStack, Button } from "@chakra-ui/react";
import { useWaitForTransaction, useAccount } from "wagmi";
import { useMyNftSetLogo, usePrepareMyNftSetLogo } from "../generated";

export function LogoEditBox({name, index}) {

    const [color1, setColor1] = useState("");
    const [color2, setColor2] = useState("");
    const [degrees, setDegrees] = useState(0);

    const handleClick = () => {
        write?.()
    };

    const handleChangeColor1 = (event) => {
        setColor1(event.target.value)
    };

    const handleChangeColor2 = (event) => {
        setColor2(event.target.value)
    };

    const handleChangeDegrees = (value) => {
        setDegrees(value)
    };

    const { isConnected } = useAccount()

    const { config } = usePrepareMyNftSetLogo({
        args: [index, color1, color2, BigInt(degrees)],
    });

    const { data, write } = useMyNftSetLogo({
        ...config,
        onSuccess: () => { },
    });
    
    const { isLoading } = useWaitForTransaction({
        hash: data?.hash,
        onSuccess: () => { },
    });

    return (
        <VStack minHeight="250" display='flex' alignItems='baseline' borderColor="black" borderWidth="1px" borderRadius="md" p={3}>
        <Heading size="md">{name}</Heading>
        <HStack >
          <Text>Color #1</Text>
          <Input variant='outline' maxW={32} placeholder='#000000' value={color1} onChange={handleChangeColor1} isDisabled={isLoading || !isConnected} />
        </HStack>
        <HStack>
          <Text>Color #2</Text>
          <Input variant='outline' maxW={32} placeholder='#000000' value={color2} onChange={handleChangeColor2} isDisabled={isLoading || !isConnected} />
        </HStack>
        <HStack>
          <Text>Degrees</Text>
          <NumberInput size='md' maxW={32} value={degrees} onChange={handleChangeDegrees} min={0} max={360} isDisabled={isLoading || !isConnected}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </HStack>                
        <Button isDisabled={!color1 || !color2 || degrees < 0 || isLoading || !isConnected || !write }
                onClick={handleClick}
                marginTop={2}
                size="md"
                colorScheme='messenger'
                variant='solid'>Update</Button>
      </VStack>
    );
}