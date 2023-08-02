import { IconType } from "react-icons";

export interface Project {
    id: string;
    title: string;
    description: string;
    status: boolean;
    techs: string[];
    link: string;
    image: IconType;
    team: boolean;
    docuemntation: string;
    code: string;
}