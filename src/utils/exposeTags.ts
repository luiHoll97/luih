import { Project } from "../types/project";
import { filterTags } from "./filterTags";

export const exposeTags = (tags : Project[]) : {}[] => {
    const returnTags : string[] = []

    for (const tag of tags) {
        tag.techs.forEach((x) => returnTags.push(x))
    }
    const filteredTechs = filterTags(returnTags)
    console.log(filteredTechs)
    const optionedTechs = []
    for (let i = 0; i < filteredTechs.length; i++) {
        optionedTechs.push({label: filteredTechs[i], value: filteredTechs[i]})
    }
    return optionedTechs
}