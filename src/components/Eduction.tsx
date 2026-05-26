import {Box, Typography} from "@mui/material";

interface Degree {
    school: string;
    city?: string;
    country?: string;
    start: Date;
    end?: Date|string;
    degree?: string;
    finalGrade?: number;
}

interface EductionProps {
    degrees?: Degree[]
}

const defaultDegreeList:Degree[] = [
    {
        school: "Bertha-von-Suttner",
        city: "Berlin",
        country: "Germany",
        start: new Date(1,8,2024),
        end: new Date(1,8,2019),
        degree: "School from 5th to 10th Grade",
    },
    {
        school: "St. Paul's School",
        city: "Baltimore",
        country: "USA",
        start: new Date(1,8,2018),
        end: new Date(1,12,2018),
        degree: "Semester abroad"
    },
    {
        school: "John-Lennon-Gymnasium",
        city: "Berlin",
        country: "Germany",
        start: new Date(1,8,2019),
        end: new Date(1,7,2021),
        degree: "Abitur",
        finalGrade: 1.7
    },
    {
        school: "Hochschule für Wirtschaft und Recht",
        city: "Berlin",
        country: "Germany",
        start: new Date(1,10,2021),
        end: new Date(1,9,2024),
        degree: "B.Sc. Wirtschaftsinformatik",
        finalGrade: 1.5
    },
    {
        school: "Technische Universität Berlin",
        city: "Berlin",
        country: "Germany",
        start: new Date(1,10,2024),
        end: new Date(1,9,2025),
        degree: "Courses done:" +
            "\nWiSe Analysis I und Lineare Algebra für Ingenieure" +
            "\nSoSe Analysis II für Ingenieurwissenschaften",
    },
    {
        school: "Technische Universität München",
        city: "München",
        country: "Germany",
        start: new Date(1,10,2025),
        end: "current",
        degree: "B.Sc. Elektrotechnik und Informationstechnologie",
    }
]

export function Eduction({degrees=defaultDegreeList}: EductionProps) {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3
        }}>
            {degrees.toReversed().map((value) => {
                return (
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 3
                    }}>
                        <Box sx={{display: "flex", flexDirection: "row"}}>
                            <Typography>{value.start.getMonth()}.{value.start.getFullYear()}-</Typography>
                            {typeof value.end === `string` ?
                                value.end
                                :
                                `${value.end?.getMonth()} . ${value.end?.getFullYear()}`
                            }
                        </Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "row"
                            }}>
                                <Typography variant={"h5"}>{value.school} · {value.city},{value.country}</Typography>
                            </Box>
                            <Typography variant={"body2"}>{value.degree}</Typography>
                        </Box>
                        {value.finalGrade &&
                            <Box sx={{background: "gray"}}>
                                {value.finalGrade}
                            </Box>
                        }
                    </Box>
                )
            })}
        </Box>
    )
}