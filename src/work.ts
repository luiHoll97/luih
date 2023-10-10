import {
  FaClipboard,
  FaSun,
  FaBook,
  FaTicketAlt,
  FaCheckDouble,
  FaSignal,
  FaHamburger
} from "react-icons/fa";
import { BiCricketBall, BiSolidCricketBall } from "react-icons/bi";
import { Project } from "./types/project";

export const Projects: Project[] = [
  {
    id: "13",
    title: "Taste.",
    description: "Full-stack React Native app using Expo and Postgres for food delivery. It's a new project but the wireframe and DB structure is complete.",
    status: false,
    techs: ["React Native", "Expo", "PostgreSQL", "Node", "Express", "React Native Paper"],
    link: "",
    image: FaHamburger,
    team: false,
    docuemntation: "https://lui-holliday-docs.notion.site/Front-End-1976a3e9ef1b4c89865f0ee40d8a70e2?pvs=4",
    code: "",
    linksAvailable: true,
  },
  {
    id: "12",
    title: "php-api",
    description:
      "An intro to PHP/Laravel API endpoints with custom PHP CLI commands. Info on how to run is in the docs.",
    status: true,
    techs: ["PHP", "API", "Laravel"],
    link: "",
    image: FaSignal,
    team: false,
    docuemntation:
      "https://lui-holliday-docs.notion.site/php-API-74062e43286b44978a930bf9e4746853?pvs=4",
    code: "https://github.com/luiHoll97/api-php",
    linksAvailable: true,
  },

  {
    id: "9",
    title: "immer todo",
    description:
      "A todo app using immer. I am also going through the immer docs and making notes (see my docs).",
    image: FaTicketAlt,
    techs: ["React", "Immer", "Chakra-ui"],
    link: "https://immer-todo.netlify.app",
    status: true,
    team: false,
    docuemntation:
      "https://lui-holliday-docs.notion.site/immer-docs-31d4d8fad9534960b4f19ad62ffc824b?pvs=4",
    code: "https://github.com/luiHoll97/immer-todo",
    linksAvailable: true,
  },
  {
    id: "11",
    title: "rollup redux",
    description:
      "A project I built during a tech test. 20mins to create a simple redux app",
    image: FaCheckDouble,
    techs: ["React", "Redux", "CSS"],
    link: "",
    status: true,
    team: false,
    docuemntation: "",
    code: "https://github.com/luiHoll97/rollup-redux",
    linksAvailable: true,
  },
  {
    id: "8",
    title: "redux scorer",
    description:
      "A very basic cricket scoreboard app using redux. I used this to see how I could use redux to manage state for a similar, larger app.",
    image: BiSolidCricketBall,
    techs: ["React", "Redux"],
    link: "https://redux-scorer.netlify.app",
    status: false,
    team: false,
    docuemntation: "",
    code: "https://github.com/luiHoll97/redux-scorer",
    linksAvailable: true,
  },
  {
    id: "10",
    title: "mobx todo",
    description:
      "Todo app using mobX and redux (for comparison purposes). This uses the immer-todo CSS template",
    image: FaCheckDouble,
    techs: ["React", "MobX", "Chakra-ui"],
    link: "https://luiholl-mobx-todo.netlify.app",
    status: true,
    team: false,
    docuemntation:
      "https://lui-holliday-docs.notion.site/mobx-todo-bc62262b194b4ec0b80cda36d26bb05c?pvs=4",
    code: "https://github.com/luiHoll97/mobx-todo",
    linksAvailable: true,
  },
  {
    id: "4",
    title: "Portfolio",
    description:
      "An old portfolio website to showcase my projects. The page is now inactive as I have moved to a new portfolio site.",
    status: true,
    techs: ["React", "Javascript", "CSS"],
    link: "https://lui-holliday.netlify.app",
    image: FaClipboard,
    team: false,
    docuemntation: "",
    code: "https://github.com/luiHoll97/lui-portfolio",
    linksAvailable: true,
  },
  {
    id: "6",
    title: "Resource Sharer",
    description:
      "A resource sharing app that allows users to share resources with each other. The app needs to be updated.",
    image: FaBook,
    techs: ["React", "Express", "PostgreSQL", "Node", 'CSS'],
    link: "https://c5c2-study-resources.netlify.app",
    status: true,
    team: true,
    docuemntation: "",
    code: "https://github.com/maemastersdev/C5C2-Study-Resources-Backend/tree/main",
    linksAvailable: true,
  },
  {
    id: "7",
    title: "Cricket Scoreboard",
    description:
      "A Cricket Scoring app. Create and save matches, teams and players specific to the users gmail ID",
    image: BiCricketBall,
    techs: ["React", "Chakra-ui", "Firebase"],
    link: "",
    status: false,
    team: false,
    docuemntation: "",
    code: "https://github.com/luiHoll97/cricket-scorer",
    linksAvailable: true,
  },
  {
    id: "1",
    title: "Gnews API",
    description:
      "An API to get news from Google News. Functionality to save favourites when signed in via Google. Currently, firebase permissions need to be updated.",
    status: false,
    techs: ["Redux", "React", "Firebase", "API"],
    link: "",
    image: FaSun,
    team: false,
    docuemntation: "",
    code: "https://github.com/luiHoll97/redux-gnews-api",
    linksAvailable: true,
  },
];
