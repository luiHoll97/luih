import { Center, SimpleGrid,Box } from "@chakra-ui/react";
import { Projects } from "../work";
import SingleProject from "./SingleProject";

const ProjectDisplay = (): JSX.Element => {
    return (
        <>
            <Box bg={'beige'} minH={'100vh'}>
                <Center>
                    <SimpleGrid columns={[1, 2, 3, 4]} spacing={10} maxW={'75%'} justifyContent={'center'}>
                        {Projects.map((project) => (
                            <SingleProject project={project} />
                        ))}
                    </SimpleGrid>
                </Center>
            </Box>
        </>
    );
}

export default ProjectDisplay;