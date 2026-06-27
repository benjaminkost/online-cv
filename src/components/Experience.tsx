import { Box, Typography, Chip, Link as MuiLink } from '@mui/material'
import { colors } from '../theme.ts'

interface Position {
  startLabel: string
  endLabel: string
  role: string
  contractType: string
  company: string
  companyUrl?: string
  description: string
  skills: string[]
}

const defaultPositions: Position[] = [
  {
    startLabel: 'Sep 2024',
    endLabel: 'Sep 2025',
    role: 'Junior Software Engineer',
    contractType: 'Part-time',
    company: '50Hertz Transmission GmbH',
    companyUrl: 'https://www.50hertz.com',
    description: '',
    skills: ['Software Engineering', 'Azure', 'Java', 'Spring Boot', 'React'],
  },
  {
    startLabel: 'Sep 2021',
    endLabel: 'Sep 2024',
    role: 'Dual Student',
    contractType: 'Duales Studium',
    company: '50Hertz Transmission GmbH',
    companyUrl: 'https://www.50hertz.com',
    description: '',
    skills: ['Software Engineering', 'Azure', 'Java', 'Python'],
  },
  {
    startLabel: 'Sep 2017',
    endLabel: 'Oct 2017',
    role: 'Verkäufer',
    contractType: 'Internship',
    company: 'Mercedes-Benz AG',
    companyUrl: 'https://www.mercedes-benz.com',
    description:
      'Support in the areas of customer negotiations, vehicle delivery, and vehicle maintenance and repair.',
    skills: ['Sales', 'Car Maintance'],
  },
]

function ArrowIcon() {
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      sx={{
        display: 'inline-block',
        width: 16,
        height: 16,
        ml: 0.5,
        flexShrink: 0,
        transition: 'transform 0.2s ease',
        transform: 'translateY(1px)',
        '.card-item:hover &': {
          transform: 'translate(4px, -4px)',
        },
      }}
    >
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
        clipRule="evenodd"
      />
    </Box>
  )
}

const cardSx = {
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', sm: '140px 1fr' },
  gap: { xs: 0.5, sm: 2 },
  p: 3,
  mx: -3,
  borderRadius: 2,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    bgcolor: 'rgba(30, 41, 59, 0.5)',
    boxShadow: 'inset 0 1px 0 0 rgba(148, 163, 184, 0.1)',
    filter: 'drop-shadow(0 10px 8px rgba(0,0,0,0.04)) drop-shadow(0 4px 3px rgba(0,0,0,0.1))',
  },
}

const cardListSx = {
  display: 'flex',
  flexDirection: 'column',
  '&:hover > .card-item': {
    opacity: 0.5,
  },
  '&:hover > .card-item:hover': {
    opacity: '1 !important',
  },
}

interface ExperienceProps {
  positions?: Position[]
}

export function Experience({ positions = defaultPositions }: ExperienceProps) {
  const { slate } = colors

  return (
    <Box sx={cardListSx}>
      {positions.map((pos, idx) => (
        <Box
          className="card-item"
          sx={cardSx}
          key={idx}
          onClick={() => pos.companyUrl && window.open(pos.companyUrl, '_blank')}
        >
          <Typography variant="caption" sx={{ mt: 0.5, whiteSpace: 'nowrap', minWidth: 120 }}>
            {pos.startLabel} — {pos.endLabel}
          </Typography>
          <Box>
            <Typography variant="h3" component="h3">
              {pos.companyUrl ? (
                <MuiLink
                  href={pos.companyUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${pos.role} at ${pos.company} (opens in a new tab)`}
                  onClick={(e: React.MouseEvent) => e.stopPropagation()}
                  sx={{
                    color: slate[200],
                    '&:hover': { color: 'primary.main' },
                    display: 'inline-flex',
                    alignItems: 'baseline',
                    fontWeight: 500,
                  }}
                >
                  {pos.role} ·{' '}
                  <Box component="span" sx={{ display: 'inline-block' }}>
                    {pos.company}
                    <ArrowIcon />
                  </Box>
                </MuiLink>
              ) : (
                <>
                  {pos.role} · {pos.company}
                </>
              )}
            </Typography>
            <Typography variant="body2" sx={{ color: slate[500], mt: 0.25 }}>
              {pos.contractType}
            </Typography>
            {pos.description && (
              <Typography variant="body2" sx={{ mt: 1 }}>
                {pos.description}
              </Typography>
            )}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1.5 }}>
              {pos.skills.map((skill, i) => (
                <Chip key={i} label={skill} size="small" />
              ))}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}