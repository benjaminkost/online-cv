import {Box, Chip, Typography} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface ProjectsProps {
    projects?: SingleProjectProps[]
}

const defaultProjects: SingleProjectProps[] = [
    {
        name: "ChessHub",
        description: "Website to manage chess games for clubs, teams and private ones",
        link: "https://chesshub.app/",
        skills: ["Docker", "Java", "Maven", "Spring Boot", "Microservices", "Python", "FastApi"]
    }
]

export function Projects({projects=defaultProjects}: ProjectsProps) {
    return (
        <Box>
            <Box sx={{display: "flex", flexDirection: "column", gap: 3}}>
                {projects.map((value) => (
                    <SingleProject
                        name={value.name}
                        description={value.description}
                        link={value.link}
                        skills={value.skills}
                    />
                ))}
            </Box>
        </Box>
    )
}

interface SingleProjectProps {
    name:string,
    description:string,
    link:string,
    skills:string[]
}

function SingleProject({name, description, link, skills}: SingleProjectProps) {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column"
        }}
             onClick={() => open(link)}
        >
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1
                }}>
                    <OpenInNewIcon/>
                    <Typography variant={"h5"}>{name}</Typography>
                </Box>
                    <Typography>{description}</Typography>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                    {
                        skills.map((value, id) => (
                            <Chip key={id} label={value}/>
                        ))
                    }
                </Box>
        </Box>
    )
}