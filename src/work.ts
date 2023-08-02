import { FaCloud, FaStickyNote, FaClipboard, FaSun } from "react-icons/fa";
import { Project } from "./types/project";

export const Projects: Project[] = [
    {
        id: "1",
        title: "Gnews API",
        description: "A simple API to get news from Google News. Functionality to save favourites when signed in via Google.",
        status: false,
        techs: ["redux", "react", "firebase", 'API'],
        link: "https://gnews-api.web.app/",
        image: FaSun
    },
    {
        id: "2",
        title: "Weather App",
        description: "A simple weather app that uses the OpenWeather API to get the weather for a given location.",
        status: false,
        techs: ["react", "API"],
        link: "https://weather-app-1-0-0.netlify.app/",
        image: FaCloud
    },
    {
        id: "3",
        title: "Todo App",
        description: "A simple todo app that uses the OpenWeather API to get the weather for a given location.",
        status: false,
        techs: ["react", "API"],
        link: "https://todo-app-1-0-0.netlify.app/",
        image: FaStickyNote
    },
    {
        id: "4",
        title: "Portfolio",
        description: "A simple portfolio website to showcase my projects.",
        status: true,
        techs: ["react", "typeScript", "Sass"],
        link:'',
        image: FaClipboard
    },
]