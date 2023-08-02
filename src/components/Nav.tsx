import React, { useState } from 'react';
import {
    Box, Flex, Button, useColorModeValue, Stack, Heading, Text,
    Menu, MenuButton, MenuList, MenuItem
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Nav(): JSX.Element {
    const [showNavMenu, setShowNavMenu] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    const toggleNavMenu = () => {
        setShowNavMenu(!showNavMenu);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navBgColor = useColorModeValue('beige', 'gray.800');
    const navPosition = scrolled ? 'fixed' : 'relative';
    const navTop = scrolled ? 0 : 'initial';

    return (
        <>
            <Box px={4} position={navPosition} top={navTop} width="100%" bgColor={navBgColor} zIndex={10} opacity={scrolled ? '0.7' : 1}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <Heading lineHeight="tall" size="md">
                            Lucien Holliday
                        </Heading>
                        <Text fontSize={'xs'}>Software Engineer</Text>
                    </Box>

                    {/* Hamburger Menu */}
                    <Flex display={{ base: 'initial', md: 'none' }} alignItems="center">
                        <Menu onClose={toggleNavMenu}>
                            <MenuButton
                                as={Button}
                                aria-label="Options"
                                variant="ghost"
                                cursor={'pointer'}
                                size="sm"
                                _hover={{ bg: 'transparent' }}
                                _active={{ bg: 'transparent' }}
                                rightIcon={!showNavMenu ? <FaBars size={20} /> : <FaTimes size={20} />}
                                onClick={toggleNavMenu}
                    
                            >

                            </MenuButton>
                            <MenuList bgColor={navBgColor} borderColor={'transparent'} borderRadius={'5px'} minW={'-moz-fit-content'} p='0'>
                                <Link to="/">
                                    <MenuItem justifyContent={'center'}>
                                        <Text>Home</Text>
                                    </MenuItem>
                                </Link>
                                <Link to="/about">
                                    <MenuItem justifyContent={'center'}>
                                        <Text>About</Text>
                                    </MenuItem>
                                </Link>
                                <Link to="/portfolio">
                                    <MenuItem justifyContent={'center'}>
                                        <Text>Projects</Text>
                                    </MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </Flex>

                    {/* Regular Nav Items */}
                    <Flex display={{ base: 'none', md: 'initial' }} alignItems="center">
                        <Stack direction="row" spacing={10} mr={5}>
                            <Link to="/">
                                <Text>Home</Text>
                            </Link>
                            <Link to="/about">
                                <Text>About</Text>
                            </Link>
                            <Link to="/portfolio">
                                <Text>Projects</Text>
                            </Link>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
