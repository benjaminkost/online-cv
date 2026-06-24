import { Typography, Box, Link as MuiLink } from '@mui/material'

export function About() {
  return (
    <Box>
      <Typography variant="body1" sx={{ mb: 2 }}>
        I am currently a student at{' '}
        <MuiLink href="https://www.tum.de" target="_blank" rel="noreferrer noopener">
          TUM
        </MuiLink>{' '}
        pursuing a degree in Electrical Engineering and Information Technology.
        As a fullstack developer, I enjoy building clean, scalable web applications
        and am passionate about bridging the gap between software and hardware.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Previously, I worked as a software engineer at{' '}
        <MuiLink href="https://www.50hertz.com" target="_blank" rel="noreferrer noopener">
          50Hertz Transmission GmbH
        </MuiLink>
        , where I developed and maintained enterprise applications while completing my
        dual studies in Business Informatics. This experience gave me a strong
        foundation in microservice architecture, agile development, and cross-functional
        collaboration.
      </Typography>
      <Typography variant="body1">
        I hold a B.Sc. in Wirtschaftsinformatik from{' '}
        <MuiLink href="https://www.hwr-berlin.de" target="_blank" rel="noreferrer noopener">
          HWR Berlin
        </MuiLink>{' '}
        and bring experience across the full stack — from backend systems with
        Java and Spring Boot to modern React-based frontends. Currently, I'm
        diving deeper into electrical engineering and hardware development.
      </Typography>
    </Box>
  )
}