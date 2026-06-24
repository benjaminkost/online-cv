import { Box, Typography, Chip } from '@mui/material'
import { colors } from '../theme.ts'

interface Degree {
  school: string
  city?: string
  country?: string
  startLabel: string
  endLabel: string
  degree?: string
  finalGrade?: number
}

const defaultDegreeList: Degree[] = [
  {
    school: 'Technische Universität München',
    city: 'München',
    country: 'Germany',
    startLabel: 'Oct 2025',
    endLabel: 'Present',
    degree: 'B.Sc. Elektrotechnik und Informationstechnologie',
  },
  {
    school: 'Technische Universität Berlin',
    city: 'Berlin',
    country: 'Germany',
    startLabel: 'Oct 2024',
    endLabel: 'Sep 2025',
    degree:
      'Courses: Analysis I & Lineare Algebra für Ingenieure (WiSe), Analysis II für Ingenieurwissenschaften (SoSe)',
  },
  {
    school: 'Hochschule für Wirtschaft und Recht',
    city: 'Berlin',
    country: 'Germany',
    startLabel: 'Oct 2021',
    endLabel: 'Sep 2024',
    degree: 'B.Sc. Wirtschaftsinformatik',
    finalGrade: 1.5,
  },
  {
    school: 'John-Lennon-Gymnasium',
    city: 'Berlin',
    country: 'Germany',
    startLabel: 'Aug 2019',
    endLabel: 'Jul 2021',
    degree: 'Abitur',
    finalGrade: 1.7,
  },
  {
    school: "St. Paul's School",
    city: 'Baltimore',
    country: 'USA',
    startLabel: 'Aug 2018',
    endLabel: 'Dec 2018',
    degree: 'Semester abroad',
  },
  {
    school: 'Bertha-von-Suttner',
    city: 'Berlin',
    country: 'Germany',
    startLabel: 'Aug 2013',
    endLabel: 'Aug 2019',
    degree: 'School from 5th to 10th Grade',
  },
]

interface EductionProps {
  degrees?: Degree[]
}

const cardSx = {
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', sm: '140px 1fr' },
  gap: { xs: 0.5, sm: 2 },
  p: 3,
  mx: -3,
  borderRadius: 2,
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

export function Eduction({ degrees = defaultDegreeList }: EductionProps) {
  const { slate, teal } = colors

  return (
    <Box sx={cardListSx}>
      {degrees.map((deg, idx) => (
        <Box className="card-item" sx={cardSx} key={idx}>
          <Typography variant="caption" sx={{ mt: 0.5, whiteSpace: 'nowrap', minWidth: 120 }}>
            {deg.startLabel} — {deg.endLabel}
          </Typography>
          <Box>
            <Typography variant="h3" component="h3">
              {deg.school}
              {deg.city && (
                <Typography
                  component="span"
                  sx={{ ml: 0.5, fontWeight: 400, fontSize: '0.85rem', color: slate[500] }}
                >
                  · {deg.city}, {deg.country}
                </Typography>
              )}
            </Typography>
            {deg.degree && (
              <Typography variant="body2" sx={{ mt: 0.5 }}>
                {deg.degree}
              </Typography>
            )}
            {deg.finalGrade && (
              <Chip label={`Note: ${deg.finalGrade}`} size="small" sx={{ mt: 1 }} />
            )}
          </Box>
        </Box>
      ))}
    </Box>
  )
}