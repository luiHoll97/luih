import { Center, SimpleGrid, Box } from "@chakra-ui/react";
import { Projects } from "../work";
import SingleProject from "./SingleProject";
import { exposeTags } from "../utils/exposeTags";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useState } from "react";
import { filterProjects } from "../utils/filterProjects";

const ProjectDisplay = (): JSX.Element => {
  const animatedComponents = makeAnimated();
  const options = exposeTags(Projects);
  const [filter, setFilter] = useState<string[]>([]);

  return (
    <>
      <Box bg={"beige"} minH={"100vh"}>
        <Center mb={5}>
          <Box justifyContent={"center"} width={"50%"} zIndex={2}>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              placeholder={"Filter"}
              options={options}
              // @ts-ignore
              onChange={(newValue, actionMeta) => {
                if (Array.isArray(newValue)) {
                  setFilter(newValue.map((option) => option.value));
                } else {
                  setFilter([]);
                }
              }}
            />
          </Box>
        </Center>
        <Center>
          <SimpleGrid
            columns={[1, 2, 3, 4]}
            spacing={10}
            maxW={"75%"}
            justifyContent={"center"}
          >
            {filterProjects(Projects, filter).map((project) => (
              <SingleProject project={project} />
            ))}
          </SimpleGrid>
        </Center>
      </Box>
    </>
  );
};

export default ProjectDisplay;
