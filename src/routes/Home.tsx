import { HomeProfile } from "../components/HomeProfile";
import Nav from "../components/Nav";

const Home = () : JSX.Element => {
    return (
        <>
            <Nav />
            <HomeProfile />
        </>
    );
}

export default Home;