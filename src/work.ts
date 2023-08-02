import { FaClipboard, FaSun, FaBook } from "react-icons/fa";
import {BiCricketBall, BiSolidCricketBall} from 'react-icons/bi'
import { Project } from "./types/project";

export const Projects: Project[] = [
    {
        id: "1",
        title: "Gnews API",
        description: "A simple API to get news from Google News. Functionality to save favourites when signed in via Google.",
        status: false,
        techs: ["redux", "react", "firebase", 'API'],
        link: "https://gnews-api.web.app/",
        image: FaSun,
        team: false,
        docuemntation: '',
        code: 'https://github.com/luiHoll97/redux-gnews-api'
    },
    {
        id: "4",
        title: "Portfolio",
        description: "A simple portfolio website to showcase my projects.",
        status: true,
        techs: ["react", "typeScript", "Sass"],
        link:'',
        image: FaClipboard,
        team: false,
        docuemntation: '',
        code: ''
    },
      {
        id: '6',
        title: "Resource Sharer",
        description: 'A simple resource sharing app that allows users to share resources with each other.',
        image: FaBook,
        techs: ["react", "express", "PostgreSQL", 'node'],
        link: "https://c5c2-study-resources.netlify.app",
        status: true,
        team: true,
        docuemntation: '',
        code: ''
      },
      {
        id: '7',
        title: "Cricket Scoreboard",
        description: 'A simple cricket scoreboard app',
        image: BiCricketBall,
        techs: ["react", 'chakra-ui', "Firebase"],
        link: "https://cricket-scoreboard-1-0-0.netlify.app",
        status: false,
        team: false,
        docuemntation: '',
        code: 'https://github.com/luiHoll97/cricket-scorer'
      },
      {
        id: '8',
        title: "redux scorer",
        description: 'A simple cricket scoreboard app using redux. I used this to see how I could use redux to manage state for my other app.',
        image: BiSolidCricketBall,
        techs: ["react", 'redux'],
        link: "https://redux-scorer.netlify.app",
        status: true,
        team: false,
        docuemntation: 'https://excellent-wolverine-1d1.notion.site/Cricket-Scorer-294263f5ae6c4970b0a3c19d75e4bda8?pvs=4',
        code: ''
      }

]