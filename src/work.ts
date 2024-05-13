import {
  FaTicketAlt,
  FaCheckDouble,
  FaSignal,
  FaHamburger
} from "react-icons/fa";
import { FaVialVirus } from "react-icons/fa6";
import { BiSolidCricketBall } from "react-icons/bi";
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
    id: "14",
    title: "fandanGO-aria",
    description:
      "Python package used by research facilities as part of the European Project 'Fragment Screen' to depsoit metadata to Instruct Eric's ARIA. ",
    status: true,
    techs: ["Python", "pip", "API"],
    link: "",
    image: FaVialVirus,
    team: false,
    docuemntation: "https://github.com/FragmentScreen/fandanGO-aria/wiki",
    code: "https://github.com/FragmentScreen/fandanGO-aria",
    pip: "https://pypi.org/project/fandanGO-aria/",
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
];
