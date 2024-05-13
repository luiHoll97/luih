import { Flex, Text, Heading, Icon } from "@chakra-ui/react"
import {FaUserFriends, FaHammer} from 'react-icons/fa'

const PortfolioDesc = (): JSX.Element => {
    return (
        <>
            <Flex justifyContent={'center'}>
                <Heading fontFamily={'mono'}>
                    What I'm working on
                </Heading>
            </Flex>
            <Flex justifyContent={'center'} mt={5}>
                <Text fontFamily={'mono'} maxW={'75%'}>
                    Take a look at some of the projects I'm working on.
                </Text>
            </Flex>
            <Flex justifyContent={'center'} mt={5}>
            <Text justifyContent={'center'} fontFamily={'mono'} maxW={'75%'} mb='20' mt={2}>
                    Some of these are still being worked on! If so you'll see a {<Icon as={FaHammer} color={'yellow.500'}/>} next to them.
                </Text>
            </Flex>
        </>
    )
}

export default PortfolioDesc;