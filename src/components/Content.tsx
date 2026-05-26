import * as React from "react";
import {Box} from "@mui/material";

interface ContentProps {
    contentSections: React.ReactNode[]
}

export function Content({contentSections}: ContentProps) {
    return (
        <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: 8
            }}
        >
            {contentSections.map((item) =>
                <Box sx={{padding: 2}}>{item}</Box>
            )}
        </Box>
    )
}

