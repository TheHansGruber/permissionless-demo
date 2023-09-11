import { Box, Flex, HStack, VStack } from '@chakra-ui/react'

import { NftImage } from './components/NftImage'
import { Navbar } from './components/Navbar'
import { LogoEditBox } from './components/LogoEditBox'
import { BackgroundEditBox } from './components/BackgroundEditBox'

export function App() {

  return (
    <>
    <Navbar />
    <Flex justifyContent="center">
    <Box marginTop={50}>
        <VStack>
          <NftImage />
          <HStack marginTop={10} gap={5}>
          <LogoEditBox name="Logo 1" index={0} />
          <LogoEditBox name="Logo 2" index={1} />
          <LogoEditBox name="Logo 3" index={2} />
          <LogoEditBox name="Logo 4" index={3} />
          <BackgroundEditBox />
          </HStack>
          <HStack>
          </HStack>
        </ VStack>
    </ Box>
    </ Flex>
    < />)
}
