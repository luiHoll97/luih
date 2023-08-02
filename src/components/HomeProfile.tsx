import Lui from '../LuiH.png'
import { Text, Box, Center, Grid, GridItem, Image, HStack, VStack, useBreakpointValue, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
export const HomeProfile = (): JSX.Element => {
    const isSmallScreen = useBreakpointValue({ base: true, md: false });

    return (
        <>
        <Box bg={'beige'} minH={'100vh'} >
            <Grid templateColumns={{ base: "1fr", md: "repeat(8, 1fr)" }} templateRows={{base : 'repeat(2,1fr)', md: 'repeat(4, 1fr)'}} gap={5}>
                {!isSmallScreen && (
                    <GridItem colSpan={{ base: 1, md: 1 }} rowSpan={{ base: 1, md: 1 }}>

                    </GridItem>
                )}
                <GridItem colSpan={{ base: 2, md: 3, lg: 3 }} rowSpan={{ base: 1, md: 2 }} >
                    <Center>
                        <Box boxSize={'md'} mt={5}>
                            <Image src={Lui} alt="Lui Picture" borderRadius={'80px'} />
                        </Box>
                    </Center>
                </GridItem>
                <GridItem colSpan={{ base: 2, md: 3 }} rowSpan={{ base: 1, md: 2 }}>
                    <Box mt={{ base: 5, md: 30, lg: 40, xl: 50 }}>
                        <Center>
                            <VStack spacing={3}>

                                <Text fontSize={'4xl'} fontWeight='light' fontFamily={'mono'}>
                                    Hey There
                                </Text>
                                <Text fontSize={'xl'} fontWeight='light' fontFamily={'mono'} maxW={'90%'} mt={2}>
                                    I'm Lui, a software engineer based in London, UK. I'm currently taking a Summer break from employment to work on some personal projects and to learn some new skills, not to mention travel a bit!
                                    Check out my socials below to see what I'm up to.
                                </Text>
                                <Box mt={10}>
                                    <HStack spacing={10}>
                                        <a href='https://github.com/luiHoll97' target='_blank' rel='noreferrer'>
                                        <Icon as={FaGithub} boxSize={10} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/lucien-holliday" target='_blank' rel='noreferrer'>
                                        <Icon as={FaLinkedin} boxSize={10} />
                                        </a>
                                        <a href="mailto:tech.luiholl@gmail.com">
                                            <Icon as={FaEnvelope} boxSize={10} />
                                        </a>
                                    </HStack>
                                </Box>
                            </VStack>
                        </Center>
                    </Box>
                </GridItem>
                {!isSmallScreen && (
                    <GridItem colSpan={{ base: 1, md: 1 }} rowSpan={{ base: 1, md: 1 }}>

                    </GridItem>
                )}
            </Grid>
        </Box>
        </>
    );
}