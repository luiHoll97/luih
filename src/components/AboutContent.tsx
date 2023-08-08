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
                        Hey, I'm Lui Holliday, a software engineer currently living in London, UK. Despite my profession, I wasn't always tech inclined and I originally studied Biomedical Sciences in Sheffield. During my time there, I got a chance to do a bioinformatics internship at SITraN, and that's when I first got into coding.
                        After finishing my degree, I moved to London and worked as a project manager in the construction industry, looking for a way to break into the tech industry. There was also some dead time due to Covid, which gave me a good oppurtunity to practise some basic Javascript principles.
                    </Text>
                </Flex>
                <Flex justifyContent={'center'} mt={10} >
                    <Text fontSize="xl" fontFamily={'mono'} maxW={'75%'}>
                        Thankfully, I got accepted into Academy.io's highly selective, fully funded graduate scheme. It was a fantastic opportunity to explore cutting-edge technologies, with a strong focus on PERN stack, good coding practises and collaboration.
                        I still have some good connections at Academy, and can't recommend them highly enough for anyone looking to get into the tech industry.
                    </Text>
                </Flex>
                <Flex justifyContent={'center'} mt={10} >
                    <Text fontSize="xl" fontFamily={'mono'} maxW={'75%'}>
                        After completing the programme, I joined Sarasin & Partners LLP, hoping to make strides in the tech/finance world. However, I didn't get what I wanted from the role, mainly using plain javascript and SQL to support a third-party server.
                        As good an experience as it was, I realised the job wasn't aligning with my learning goals, so I decided to move on after five months.
                        Right now, I'm in a phase of upskilling and seeking new opportunities to grow. My passion for coding and technology is stronger than ever, and I'm looking forward to joining a company that shares this.
                    </Text>
                </Flex>
                <Flex justifyContent={'center'} mt={10} >
                    <Text fontSize="xl" fontFamily={'mono'} maxW={'75%'}>
                        Aside from my professional journey, I had some fun experiences as a kid – playing cricket for Nottinghamshire and representing England in chess.
                        I also love to travel and actually moved to Rome during my time at Academy. I'm trying my best to continue learning Italian, but it's not easy.
                    </Text>
                </Flex>

            </Box>
        </>
    );
}

export default AboutContent;