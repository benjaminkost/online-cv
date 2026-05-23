import {Typography} from "@mui/material";

interface Degree {
    school: string;
    start: Date;
    end?: Date;
    degree?: string;
    finalGrade?: number;
}

interface EductionProps {
    degrees?: Degree[]
}

const defaultDegreeList:Degree[] = [
    {
        school: "Bertha-von-Suttner",
        start: new Date(),
        degree: "School from 5th to 10th Grade",
    }
]

export function Eduction({degrees=defaultDegreeList}: EductionProps) {
    return (
        <>
            {degrees.map((value) => {
                return (
                    <Typography>{value.school}</Typography>
                )
            })}
        </>
    )
}