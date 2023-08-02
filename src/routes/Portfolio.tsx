import Nav from "../components/Nav";
import ProjectDisplay from "../components/ProjectDisplay";
import PortfolioDesc from "../components/PortfolioDesc";

const Portfolio = () : JSX.Element => {
    return (
        <>
            <Nav />
            <PortfolioDesc />
            <ProjectDisplay />
        </>
    );
}

export default Portfolio;