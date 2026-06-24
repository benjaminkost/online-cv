import { Box, Typography, Link as MuiLink } from '@mui/material'
import { colors } from '../theme.ts'

interface SidebarProps {
  activeSection: string
  sections: readonly string[]
}

export function Sidebar({ activeSection, sections }: SidebarProps) {
  const { slate } = colors

  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        mb: { xs: 8, lg: 0 },
        // Desktop: sticky sidebar
        position: { lg: 'sticky' },
        top: { lg: 0 },
        maxHeight: { lg: '100vh' },
        width: { lg: '48%' },
        py: { lg: 12 },
        justifyContent: { lg: 'space-between' },
      }}
    >
      <Box>
        <Typography variant="h1" component="h1">
          <MuiLink href="/" sx={{ color: slate[200], '&:hover': { color: 'primary.main' } }}>
            Benjamin Kostka
          </MuiLink>
        </Typography>

        <Typography variant="h2" component="h2" sx={{ mt: 1.5 }}>
          Fullstack Developer · Electrical Engineering Student
        </Typography>

        <Typography variant="body1" sx={{ mt: 2, maxWidth: 320, lineHeight: 1.6 }}>
          I build full-stack applications and explore the world of hardware development.
        </Typography>

        {/* Navigation — only visible on desktop */}
        <Box
          component="nav"
          aria-label="In-page jump links"
          sx={{ display: { xs: 'none', lg: 'block' }, mt: 4 }}
        >
          <Box component="ul" sx={{ display: 'flex', flexDirection: 'column', width: 'max-content' }}>
            {sections.map((id) => {
              const isActive = activeSection === id
              return (
                <li key={id}>
                  <Box
                    component="a"
                    href={`#${id}`}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      py: 1.5,
                      textDecoration: 'none',
                      cursor: 'pointer',
                      '&:hover .nav-indicator': {
                        width: 64,
                        bgcolor: slate[200],
                      },
                      '&:hover .nav-text': {
                        color: slate[200],
                      },
                    }}
                  >
                    <Box
                      className="nav-indicator"
                      sx={{
                        height: '1px',
                        width: isActive ? 64 : 32,
                        bgcolor: isActive ? slate[200] : slate[600],
                        mr: 2,
                        transition: 'width 0.25s ease, background-color 0.25s ease',
                      }}
                    />
                    <Typography
                      className="nav-text"
                      variant="overline"
                      sx={{
                        color: isActive ? slate[200] : slate[500],
                        transition: 'color 0.25s ease',
                      }}
                    >
                      {id}
                    </Typography>
                  </Box>
                </li>
              )
            })}
          </Box>
        </Box>
      </Box>

      {/* Social Links */}
      <Box
        component="ul"
        aria-label="Social media"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 3,
          mt: 4,
        }}
      >
        <li>
          <MuiLink
            href="https://github.com/benjaminkost"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
            sx={{ display: 'block', color: slate[400], '&:hover': { color: slate[200] } }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="24" height="24" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </MuiLink>
        </li>
        <li>
          <MuiLink
            href="https://www.linkedin.com/in/benjamin-kostka-17b8a91bb/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
            title="LinkedIn"
            sx={{ display: 'block', color: slate[400], '&:hover': { color: slate[200] } }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
            </svg>
          </MuiLink>
        </li>
        <li>
          <MuiLink
            href="mailto:mail@ben-kostka.de"
            aria-label="Email"
            title="Email"
            sx={{ display: 'block', color: slate[400], '&:hover': { color: slate[200] } }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </MuiLink>
        </li>
      </Box>
    </Box>
  )
}
