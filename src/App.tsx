import { useAccount } from 'wagmi'
import { Center, Button, Text, Heading, HStack, VStack, Input, NumberInput, NumberInputField,  NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'

import { NftImage } from './components/NftImage'
import { CirclePicker } from 'react-color'
import { Navbar } from './components/Navbar'

export function App() {
  const { isConnected } = useAccount()

  return (
    <>
    <Navbar />
    <Center marginTop={50}>
      {isConnected && (
        <VStack>
          <NftImage />
          <HStack marginTop={10}>
            <VStack>
              <HStack>
                <Text>Color #1</Text>
                <Input variant='outline' maxW={32} placeholder='#000000' />
              </HStack>
              <HStack>
                <Text>Color #2</Text>
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
              <HStack gap={5} marginTop={3}>
                <Heading size="md">Logo #1</Heading>
                <Button size="sm" colorScheme='messenger' variant='solid'>
                  Update
                </Button>
              </HStack>
            </VStack>

            <VStack>
              <HStack>
                <Text>Color #1</Text>
                <Input variant='outline' maxW={32} placeholder='#000000' />
              </HStack>
              <HStack>
                <Text>Color #2</Text>
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
              <HStack gap={5} marginTop={3}>
                <Heading size="md">Logo #2</Heading>
                <Button size="sm" colorScheme='messenger' variant='solid'>
                  Update
                </Button>
              </HStack>
            </VStack>

            <VStack>
              <HStack>
                <Text>Color #1</Text>
                <Input variant='outline' maxW={32} placeholder='#000000' />
              </HStack>
              <HStack>
                <Text>Color #2</Text>
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
              <HStack gap={5} marginTop={3}>
                <Heading size="md">Logo #3</Heading>
                <Button size="sm" colorScheme='messenger' variant='solid'>
                  Update
                </Button>
              </HStack>
            </VStack>

            <VStack>
              <HStack>
                <Text>Color #1</Text>
                <Input variant='outline' maxW={32} placeholder='#000000' />
              </HStack>
              <HStack>
                <Text>Color #2</Text>
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
              <HStack gap={5} marginTop={3}>
                <Heading size="md">Logo #4</Heading>
                <Button size="sm" colorScheme='messenger' variant='solid'>
                  Update
                </Button>
              </HStack>
            </VStack>

            <VStack>
              <HStack>
                <Text>Color #1</Text>
                <Input variant='outline' maxW={32} placeholder='#000000' />
              </HStack>
              <HStack gap={5} marginTop={3}>
                <Heading size="md">Background</Heading>
                <Button size="sm" colorScheme='messenger' variant='solid'>
                  Update
                </Button>
              </HStack>
            </VStack>
          </HStack>
          <HStack>
            <Button marginTop={5} size="lg" colorScheme='messenger' variant='solid'>
                Refresh
            </Button>
          </HStack>
        </ VStack>
      )}
    </Center>
    </>)
}
