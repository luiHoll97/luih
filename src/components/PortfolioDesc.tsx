import { Flex, Text, Heading, Divider, Box, Icon } from "@chakra-ui/react"
import {FaUserFriends} from 'react-icons/fa'

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
                    Here are some of the projects I've worked on recently. I'm taking this time out to learn some new skills and technologies, so I'll be adding more projects as I go.
                    My previous role was a lot of plain JavaScript, so taking this time to further my TypeScript and React knoweledge has been great for improving my front-end skills.
                    I've focussed less on my back-end skills, hence a lot of firebase projects, but I'm looking to improve my back-end skills in the near future.
                </Text>
            </Flex>
            <Flex justifyContent={'center'} mt={5}>
            <Text justifyContent={'center'} fontFamily={'mono'} maxW={'75%'} mb='20' mt={2}>
                    Some of these projects were done with friends, so you'll see a {<Icon as={FaUserFriends} color={'green'}/>} next to the ones I worked on with others.
                </Text>
            </Flex>
        </>
    )
}

export default PortfolioDesc;