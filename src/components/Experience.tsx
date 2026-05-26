import {Box, Typography, Chip} from "@mui/material";

interface ExperienceProps {
    positions?: SingleExperienceProps[]
}

const defaultPositions: SingleExperienceProps[] = [
    {
        start: new Date(1,9,2017),
        end: new Date(1,10,2017),
        role: "Verkäufer",
        contractType: "Internship",
        company: "Mercedes-Benz AG",
        description: "Unterstützung in den Bereichen:\n" +
        "-Verhandlung mit Kunden\n" +
        "-Auslieferung von Autos,\n" +
        "-Wartung und Reparatur der Autos",
        skills: ["Verkauf", "Autowartung"]
    },
    {
        start: new Date(1,9,2021),
        end: new Date(1,9,2024),
        role: "Dual Student",
        contractType: "Duales Studium",
        company: "50Hertz Transmission GmbH",
        description: "",
        skills: ["Software Engineering", "Azure"]
    },
    {
        start: new Date(1,9,2024),
        end: new Date(1,9,2025),
        role: "Junior Software Engineer",
        contractType: "Part-time",
        company: "50Hertz Transmission GmbH",
        description: "",
        skills: ["Software Engineering", "Azure"]
    }
];

export function Experience({positions=defaultPositions}: ExperienceProps) {
    return (
        <Box>
            <Box sx={{display: "flex", flexDirection: "column", gap: 3}}>
            {positions.map((value) => (
                    <SingleExperience start={value.start}
                                      end={value.end}
                                      role={value.role}
                                      contractType={value.contractType}
                                      company={value.company}
                                      description={value.description}
                                      skills={value.skills}/>
            ))}
            </Box>
        </Box>
    )
}

interface SingleExperienceProps {
    start: Date;
    end: Date;
    role: string;
    contractType: string;
    company: string;
    description: string;
    skills: string[];
}

function SingleExperience({start, end, role, contractType, company, description, skills}: SingleExperienceProps) {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            gap: 3
        }}>
            <Typography>{start.getMonth()}.{start.getFullYear()}-{end.getMonth()}.{end.getDate()}</Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "column"
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <Typography variant={"h5"}>{role} · {company}</Typography>
                </Box>
                <Typography variant={"h6"}>{contractType}</Typography>
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
        </Box>
    )
}