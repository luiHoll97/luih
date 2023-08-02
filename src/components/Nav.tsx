import {
    Box, Flex, Avatar, Button, Menu, MenuButton, MenuList,
    MenuItem, MenuDivider, useColorModeValue, Stack,
    useColorMode, Center, Heading, Highlight, Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';


export default function Nav(): JSX.Element {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Box px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <Heading lineHeight='tall' size={'md'}>
                            Lucien Holliday
                        </Heading>
                        <Center>
                            <Text fontSize={'xs'}>
                                Software Engineer
                            </Text>
                        </Center>
                    </Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={10} mr={5}>
                            <Link to='/'>
                                <Text >
                                    Home
                                </Text>
                            </Link>
                            <Link to='/about'>
                                <Text >
                                    About
                                </Text>
                            </Link>
                            <Link to='/portfolio'>
                                <Text >
                                    Projects
                                </Text>
                            </Link>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}