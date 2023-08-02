import NavTest from "../components/NavTest";
import ProjectDisplay from "../components/ProjectDisplay";
import PortfolioDesc from "../components/PortfolioDesc";

const Portfolio = () : JSX.Element => {
    return (
        <>
            <NavTest />
            <PortfolioDesc />
            <ProjectDisplay />
        </>
    );
}

export default Portfolio;