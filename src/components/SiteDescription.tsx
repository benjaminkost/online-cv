import {Link, Typography} from "@mui/material";

export function SiteDescription() {
    return (
        <Typography variant={"body1"}>
            Inspired by <Link href={"https://brittanychiang.com/"} target={"_blank"}>Brittany Chiang</Link> but I rewrote it in ReactTs.
        </Typography>
    )
}