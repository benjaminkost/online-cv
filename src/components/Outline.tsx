import {Box, Typography} from "@mui/material";

export function Outline() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column"
        }}>
            <Typography variant={"h4"}>Benjamin Kostka</Typography>
            <Typography variant={"h6"}>Fullstack Developer, Student for Electrical Engineering</Typography>
        </Box>
    )
}