import {Box, Typography, Chip} from "@mui/material";

interface ExperienceProps {
    positions?: SingleExperienceProps[]
}

const defaultPositions: SingleExperienceProps[] = [
    {
        start: new Date(1,9,2017),
        end: new Date(1,10,2017),
        role: "Verkäufer",
        company: "Mercedes-Benz AG",
        description: "Unterstützung in den Bereichen:\n" +
        "-Verhandlung mit Kunden\n" +
        "-Auslieferung von Autos,\n" +
        "-Wartung und Reparatur der Autos",
        skills: ["Verkauf"]
    }
];

export function Experience({positions=defaultPositions}: ExperienceProps) {
    return (
        <Box>
            {positions.map((value) => (
                <SingleExperience start={value.start}
                                  end={value.end}
                                  role={value.role}
                                  company={value.company}
                                  description={value.description}
                                  skills={value.skills}/>
            ))}
        </Box>
    )
}

interface SingleExperienceProps {
    start: Date;
    end: Date;
    role: string;
    company: string;
    description: string;
    skills: string[];
}

function SingleExperience({start, end, role, company, description, skills}: SingleExperienceProps) {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            gap: 3
        }}>
            <Typography>{start.getMonth()} {start.getFullYear()}-{end.getMonth()} {end.getDate()}</Typography>
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