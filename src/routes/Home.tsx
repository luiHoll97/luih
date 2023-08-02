import { Box } from "@chakra-ui/react";
import { HomeProfile } from "../components/HomeProfile";
import Nav from "../components/Nav";
import NavTest from "../components/Nav";

const Home = () : JSX.Element => {
    return (
        <>
        <Box bg={'beige'} minH={'100vh'} display={'flex'} flexDirection={'column'}>
            <NavTest />
            <HomeProfile />
        </Box>
        </>
    );
}

export default Home;