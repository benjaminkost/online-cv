import { Box, Typography, Chip, Link as MuiLink } from '@mui/material'
import { colors } from '../theme.ts'
import chessboardImg from '../assets/chessboard.jpeg'

interface Project {
  name: string
  description: string
  link: string
  skills: string[]
  image?: string
}

const defaultProjects: Project[] = [
  {
    name: 'ChessHub',
    description:
      'Website to manage chess games for clubs, teams and private ones. Features include game management, player profiles, and real-time updates.',
    link: 'https://chesshub.app/',
    skills: ['Docker', 'Java', 'Maven', 'Spring Boot', 'Microservices', 'Python', 'FastAPI'],
    image: chessboardImg,
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

interface ProjectsProps {
  projects?: Project[]
}

export function Projects({ projects = defaultProjects }: ProjectsProps) {
  const { slate } = colors

  return (
    <Box sx={cardListSx}>
      {projects.map((proj, idx) => (
        <Box
          className="card-item"
          sx={cardSx}
          key={idx}
          onClick={() => window.open(proj.link, '_blank')}
        >
          {/* Project thumbnail */}
          {proj.image ? (
            <Box
              component="img"
              src={proj.image}
              alt={`${proj.name} preview`}
              sx={{
                width: '100%',
                objectFit: 'cover',
                borderRadius: 1,
                border: '2px solid',
                borderColor: 'rgba(148, 163, 184, 0.1)',
                transition: 'border-color 0.3s ease',
                '.card-item:hover &': {
                  borderColor: 'rgba(148, 163, 184, 0.3)',
                },
                mt: 0.5,
              }}
            />
          ) : (
            <Box />
          )}
          <Box>
            <Typography variant="h3" component="h3">
              <MuiLink
                href={proj.link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${proj.name} (opens in a new tab)`}
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                sx={{
                  color: slate[200],
                  '&:hover': { color: 'primary.main' },
                  display: 'inline-flex',
                  alignItems: 'baseline',
                  fontWeight: 500,
                }}
              >
                <Box component="span" sx={{ display: 'inline-block' }}>
                  {proj.name}
                  <ArrowIcon />
                </Box>
              </MuiLink>
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {proj.description}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1.5 }}>
              {proj.skills.map((skill, i) => (
                <Chip key={i} label={skill} size="small" />
              ))}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}