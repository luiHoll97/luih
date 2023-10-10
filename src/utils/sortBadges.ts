export const sortBadges = (tech: string): string => {
  switch (tech) {
    case "React":
      return "blue";
    case "Firebase":
      return "orange";
    case "Redux":
      return "purple";
    case "Chakra-ui":
      return "teal";
    case "TypeScript":
      return "cyan";
    case "API":
      return "green";
    case "Sass":
      return "pink";
    case "Express":
      return "yellow";
    case "PostgreSQL":
      return "red";
    case "Node":
      return "green";
    case "Immer":
      return "blue";
    case "MobX":
      return "green";
    case "JavaScript":
      return "yellow";
    case "CSS":
      return "pink";
    case "PHP":
      return "purple";
    case "Laravel":
      return "red";
      case "React Native":
      return "blue";
      case "Expo":
      return "green";
      case "React Native Paper":
      return "pink";
      

    default:
      return "gray";
  }
};
