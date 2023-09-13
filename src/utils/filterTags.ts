export const filterTags = (techs : string[]) : string[] => {
    techs.sort()
    let filterTechs = [techs[0]]

    for (let i = 1; i < techs.length; i++) {
        console.log(techs[i], filterTechs[i-1], techs, filterTechs, i)
        if (!filterTechs.includes(techs[i])) {
            console.log('pushing',techs[i], filterTechs[i-1])
            filterTechs.push(techs[i])
        }
    }
    return filterTechs
}