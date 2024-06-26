import { Project } from "../types/project";
import {
  Text,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  Card,
  Icon,
  Badge,
  Center,
  HStack,
  Flex,
} from "@chakra-ui/react";
import {
  FaCode,
  FaDochub,
  FaChrome,
  FaUserFriends,
  FaHammer,
  FaPython
} from "react-icons/fa";
import { sortBadges } from "../utils/sortBadges";

interface Props {
  project: Project;
}

const isProjectsIcons = (project: Project): boolean =>
  (project.linksAvailable && project.status === false) || project.team;
const isNewProject = (project: Project): boolean =>
  project.status === false && project.linksAvailable === false;

const SingleProject = ({ project }: Props): JSX.Element => {
  return (
    <>
      <Card maxW="sm" opacity={project.status ? "1" : "0.8"}>
        {isNewProject(project) && (
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
            New Project
          </Center>
        )}

        {isProjectsIcons(project) && (
          <Stack
            direction="row"
            spacing={2}
            position="absolute"
            top="0"
            left="0"
            zIndex="1"
            ml={2}
            mt={2}
          >
            {project.team && (
              <Icon as={FaUserFriends} boxSize={6} color={"green"} />
            )}
            {!project.status && (
              <Icon as={FaHammer} boxSize={6} color={"yellow.500"} />
            )}
          </Stack>
        )}
        <CardBody>
          <Icon as={project.image} boxSize="50px" w={"100%"} />
          <Stack mt="6" spacing="3">
            <Heading size="sm">{project.title}</Heading>
            <Text>{project.description}</Text>
          </Stack>
        </CardBody>
        <Flex justifyContent="center" mb={3} overflow={"hidden"}>
          <Stack direction="row" wrap={"wrap"} m={1.5}>
            {project.techs.map((tech) => (
              <Badge colorScheme={sortBadges(tech)}>{tech} </Badge>
            ))}
          </Stack>
        </Flex>
        <Divider />
        <Center>
          <CardFooter>
            <HStack spacing="5" justifyContent={"center"}>
              {project.code && (
                <a href={project.code} target="_blank" rel="noreferrer" title="code link">
                  <Icon as={FaCode} boxSize={7} href={""} />
                </a>
              )}
              {project.docuemntation && (
                <a
                  href={project.docuemntation}
                  target="_blank"
                  rel="noreferrer"
                  title="documentation"
                >
                  <Icon as={FaDochub} boxSize={7} />
                </a>
              )}
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">
                  <Icon as={FaChrome} boxSize={7} cursor={"pointer"} title="live site" />
                </a>
              )}
              {project.pip && (
                <a href={project.pip} target="_blank" rel="noreferrer" title="pypi index">
                  <Icon as={FaPython} boxSize={7} cursor={"pointer"} />
                </a>
              )}
            </HStack>
          </CardFooter>
        </Center>
      </Card>
    </>
  );
};

export default SingleProject;
