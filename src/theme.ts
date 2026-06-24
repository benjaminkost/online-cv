// Brittany Chiang inspired color palette
import {createTheme} from "@mui/material";

const slate = {
  900: '#0f172a',
  800: '#1e293b',
  700: '#334155',
  600: '#475569',
  500: '#64748b',
  400: '#94a3b8',
  300: '#cbd5e1',
  200: '#e2e8f0',
  100: '#f1f5f9',
}

const teal = {
  900: '#134e4a',
  400: '#2dd4bf',
  300: '#5eead4',
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: teal[300],
      light: teal[300],
      dark: teal[400],
    },
    background: {
      default: slate[900],
      paper: slate[800],
    },
    text: {
      primary: slate[400],
      secondary: slate[500],
      disabled: slate[600],
    },
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    // h1: Name in sidebar
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '-0.025em',
      lineHeight: 1.1,
      color: slate[200],
      '@media (min-width:1024px)': {
        fontSize: '3rem',
      },
    },
    // h2: Subtitle in sidebar
    h2: {
      fontSize: '1.15rem',
      fontWeight: 500,
      letterSpacing: '-0.01em',
      color: slate[200],
      '@media (min-width:1024px)': {
        fontSize: '1.25rem',
      },
    },
    // h3: Card headings (experience, education, projects)
    h3: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: slate[200],
    },
    // Section titles (mobile sticky headers)
    h4: {
      fontSize: '0.8rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase' as const,
      color: slate[200],
    },
    // body1: Default body text
    body1: {
      fontSize: '0.95rem',
      lineHeight: 1.7,
      color: slate[400],
    },
    // body2: Card descriptions
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: slate[400],
    },
    // caption: Dates, small text
    caption: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.05em',
      textTransform: 'uppercase' as const,
      color: slate[500],
    },
    // overline: Nav text
    overline: {
      fontSize: '0.7rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase' as const,
      lineHeight: 1,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
          scrollPaddingTop: '5rem',
        },
        body: {
          backgroundColor: slate[900],
          color: slate[400],
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        '::selection': {
          backgroundColor: teal[300],
          color: teal[900],
        },
        a: {
          color: 'inherit',
          textDecoration: 'none',
        },
        'ul, ol': {
          listStyle: 'none',
          margin: 0,
          padding: 0,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(94, 234, 212, 0.1)',
          color: teal[300],
          fontSize: '0.75rem',
          fontWeight: 500,
          height: 'auto',
          borderRadius: '9999px',
          '& .MuiChip-label': {
            padding: '4px 12px',
            lineHeight: 1.6,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: slate[200],
          fontWeight: 500,
          textDecoration: 'none',
          transition: 'color 0.15s ease',
          '&:hover': {
            color: teal[300],
          },
        },
      },
    },
  },
})

// Export palette constants for use in sx props
export const colors = { slate, teal }

export default theme
