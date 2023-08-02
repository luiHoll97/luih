import { Project } from "../types/project";
import { Text, CardBody, Stack, Heading, Divider, CardFooter, Card, Icon, Badge, Center, HStack, Flex } from "@chakra-ui/react";
import { FaCode, FaDochub, FaChrome, FaUserFriends } from "react-icons/fa";
import { sortBadges } from "../utils/sortBadges";

interface Props {
    project: Project;
}

const SingleProject = ({ project }: Props): JSX.Element => {
    return (
        <>
            <Card maxW='sm' opacity={project.status ? "1" : "0.7"}>
                {project.status === false && (
                    <Center
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        height="100%"
                        bg="gray.300"
                        opacity="0.8"
                        zIndex="1"
                        color="black"
                        fontWeight="bold"
                    >
                        In Progress
                    </Center>
                )}
                {project.team && (
                    <Center
                        position="absolute"
                        top="0"
                        right="0"
                        zIndex="1"
                        color="white"
                        mr={2}
                    >
                        <Icon as={FaUserFriends} boxSize={6} color={'green'} />
                    </Center>
                )}
                <CardBody>
                    <Icon as={project.image} boxSize='50px' w={'100%'} />
                    <Stack mt='6' spacing='3'>
                        <Heading size='sm'>{project.title}</Heading>
                        <Text>
                            {project.description}
                        </Text>
                    </Stack>
                </CardBody>
                <Flex justifyContent='center' mb={3} overflow={'hidden'}>
                    <Stack direction='row' wrap={'wrap'} m={1.5}>
                        {project.techs.map((tech) => (
                            <Badge colorScheme={sortBadges(tech)}>{tech} </Badge>
                        ))}
                    </Stack>
                </Flex>
                <Divider />
                <Center>
                    <CardFooter>
                        <HStack spacing='5' justifyContent={'center'}>
                            {project.code &&
                                <Icon as={FaCode} boxSize={7} href={''} />
                            }
                            {project.docuemntation &&
                                <a href={project.docuemntation} target="_blank" rel="noreferrer">
                                    <Icon as={FaDochub} boxSize={7} />
                                </a>
                            }
                            {project.link &&
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    <Icon as={FaChrome} boxSize={7} cursor={'pointer'} />
                                </a>
                            }
                        </HStack>
                    </CardFooter>
                </Center>
            </Card>
        </>
    );
}

export default SingleProject;
