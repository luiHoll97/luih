import { Box } from "@chakra-ui/react";
import { HomeProfile } from "../components/HomeProfile";
import Nav from "../components/Nav";

const Home = () : JSX.Element => {
    return (
        <>
        <Box bg={'beige'} minH={'100vh'} display={'flex'} flexDirection={'column'}>
            <Nav />
            <HomeProfile />
        </Box>
        </>
    );
}

export default Home;