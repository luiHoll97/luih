import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const AboutContent = (): JSX.Element => {
    return (
        <>
            <Box bg={'beige'} minH={'100vh'}>
                <Flex justifyContent={'center'} mt={15} >
                    <Heading as="h1" size="2xl" fontFamily={'mono'}>About</Heading>
                </Flex>
                <Flex justifyContent={'center'} mt={10} >
                    <Text fontSize="xl" fontFamily={'mono'} maxW={'75%'}>
                        Hello there. I'm Lui, a Software Engineer based in London, UK. I have experience in both financial services and biotechnology as a developer, as well as some freelance work in the real estate industry.
                    </Text>
                </Flex>
                <Flex justifyContent={'center'} mt={10} >
                    <Text fontSize="xl" fontFamily={'mono'} maxW={'75%'}>
                        I started my career in Biomedical Science, graduating from Sheffield Hallam University, where I developed an intrigue for programming during a bioinformatics palcement at the SITraN research facility.
                        Pursuing this interest, I was accepted onto Academy.io's fully-funded software engineering bootcamp, where I learned the fundamentals of web development and software engineering.
                    </Text>
                </Flex>
                <Flex justifyContent={'center'} mt={10} >
                    <Text fontSize="xl" fontFamily={'mono'} maxW={'75%'}>
                        Since then, aside from employment, I have spent a considerable amount of time exploring new technologies and frameworks, to both explore unique solutions to problems and to discover where my interests lie.
                    </Text>
                </Flex>
                <Flex justifyContent={'center'} mt={10} >
                    <Text fontSize="xl" fontFamily={'mono'} maxW={'75%'}>
                        In my current role, I work with a team of developers to advance and maintain the project management software of a Pan-European Research Infrastructure.
                        As part of this, I am the author of a Python package that is used (or atleast will be when we go live) by research facilities across Europe to deposit metadata from various structural biology techniques to a centralised database.
                    </Text>
                </Flex>

            </Box>
        </>
    );
}

export default AboutContent;