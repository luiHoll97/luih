import { Project } from "../types/project";
import { Text, CardBody, Stack, Heading, Divider, CardFooter, Card, Icon, Badge, Center, HStack, Flex } from "@chakra-ui/react";
import { FaCode, FaDochub, FaChrome } from "react-icons/fa";
import { sortBadges } from "../utils/sortBadges";

interface Props {
    project: Project;
}


const SingleProject = ({ project }: Props): JSX.Element => {
    return (
        <>
            <Card maxW='sm'>
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
                    <Stack direction='row' wrap={'wrap'}>
                        {project.techs.map((tech) => (
                            <Badge colorScheme={sortBadges(tech)}>{tech} </Badge>
                        ))}
                    </Stack>
                </Flex>
                <Divider />
                <Center>
                    <CardFooter>
                        <HStack spacing='5' justifyContent={'center'}>
                            <Icon as={FaCode} boxSize={7} />
                            <Icon as={FaDochub} boxSize={7} />
                            <Icon as={FaChrome} boxSize={7} />
                        </HStack>
                    </CardFooter>
                </Center>
            </Card>
        </>
    );
}

export default SingleProject;