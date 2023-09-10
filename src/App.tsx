import { useAccount } from 'wagmi'
import { Center, Button, Flex, Text, Heading, HStack, VStack, Input, NumberInput, NumberInputField,  NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'

import { NftImage } from './components/NftImage'
import { CirclePicker } from 'react-color'
import { Navbar } from './components/Navbar'

export function App() {
  const { isConnected } = useAccount()

  return (
    <>
    <Navbar />
    <Flex justifyContent="center">
    <Center marginTop={50}>
      {isConnected && (
        <VStack>
          <NftImage />
          <HStack marginTop={10}>
            <VStack>
              <Heading size="md">Logo 1</Heading>
              <HStack>
                <Text>Color 1</Text>
                <Input variant='outline' maxW={32} placeholder='#000000' />
              </HStack>
              <HStack>
                <Text>Color 2</Text>
                <Input variant='outline' maxW={32} placeholder='#000000' />
              </HStack>
              <HStack>
                <Text>Degrees</Text>
                <NumberInput size='md' maxW={32} defaultValue={0} min={0} max={360}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </HStack>                
              <Button marginTop={2} size="sm" colorScheme='messenger' variant='solid'>Update</Button>
            </VStack>

            <VStack>
              <Heading size="md">Logo 2</Heading>
              <HStack>
                <Text>Color 1</Text>
                <Input variant='outline' maxW={32} placeholder='#000000' />
              </HStack>
              <HStack>
                <Text>Color 2</Text>
                <Input variant='outline' maxW={32} placeholder='#000000' />
              </HStack>
              <HStack>
                <Text>Degrees</Text>
                <NumberInput size='md' maxW={32} defaultValue={0} min={0} max={360}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </HStack>
              <Button marginTop={2} size="sm" colorScheme='messenger' variant='solid'>Update</Button>
            </VStack>

            <VStack>
              <Heading size="md">Logo 3</Heading>
              <HStack>
                <Text>Color 1</Text>
                <Input variant='outline' maxW={32} placeholder='#000000' />
              </HStack>
              <HStack>
                <Text>Color 2</Text>
                <Input variant='outline' maxW={32} placeholder='#000000' />
              </HStack>
              <HStack>
                <Text>Degrees</Text>
                <NumberInput size='md' maxW={32} defaultValue={0} min={0} max={360}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </HStack>
              <Button marginTop={2} size="sm" colorScheme='messenger' variant='solid'>Update</Button>
            </VStack>

            <VStack>
              <Heading size="md">Logo 4</Heading>
              <HStack>
                <Text>Color 1</Text>
                <Input variant='outline' maxW={32} placeholder='#000000' />
              </HStack>
              <HStack>
                <Text>Color 2</Text>
                <Input variant='outline' maxW={32} placeholder='#000000' />
              </HStack>
              <HStack>
                <Text>Degrees</Text>
                <NumberInput size='md' maxW={32} defaultValue={0} min={0} max={360}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </HStack>
              <Button marginTop={2} size="sm" colorScheme='messenger' variant='solid'>Update</Button>
            </VStack>

            <VStack>
              <Heading size="md">Background</Heading>
              <HStack>
                <Text>Color #1</Text>
                <Input variant='outline' maxW={32} placeholder='#000000' />
              </HStack>
              <Button marginTop={2} size="sm" colorScheme='messenger' variant='solid'>Update</Button>
            </VStack>
          </HStack>
          <HStack>
          </HStack>
        </ VStack>
      )}
    </ Center>
    </ Flex>
    < />)
}
