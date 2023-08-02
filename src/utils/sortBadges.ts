export const sortBadges = (tech: string): string => {
    switch (tech) {
        case 'react':
            return 'blue'
        case 'firebase':
            return 'orange'
        case 'redux':
            return 'purple'
        case 'chakra-ui':
            return 'teal'
        case 'typeScript':
            return 'cyan'
        case 'API':
            return 'green'
        case 'Sass':
            return 'pink'
        case 'express':
            return 'yellow'
        case 'PostgreSQL':
            return 'red'
        case 'node':
            return 'green'
            
        default:
            return 'gray'
    }
}