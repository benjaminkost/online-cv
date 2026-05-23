import {Box} from "@mui/material";
import {Outline} from "./components/Outline.tsx";
import {Content} from "./components/Content.tsx";
import {About} from "./components/About.tsx";
import {Eduction} from "./components/Eduction.tsx";

function App() {

  return (
    <>
      <Box
          sx={{
            display: "flex",
            flexDirection: "row"
          }}
      >
          <Outline/>
          <Content contentSections={[<About/>, <Eduction/>]} />
      </Box>
    </>
  )
}

export default App
