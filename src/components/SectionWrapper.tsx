import { Box, Typography } from '@mui/material'
import type { ReactNode } from 'react'

interface SectionWrapperProps {
  id: string
  label: string
  title: string
  children: ReactNode
}

export function SectionWrapper({ id, label, title, children }: SectionWrapperProps) {
  return (
    <Box
      component="section"
      id={id}
      aria-label={label}
      sx={{
        mb: { xs: 8, md: 12, lg: 18 },
        scrollMarginTop: { xs: '5rem', lg: '6rem' },
      }}
    >
      {/* Sticky mobile header — hidden on desktop via sr-only equivalent */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 20,
          mx: { xs: -3, md: -6 },
          px: { xs: 3, md: 6 },
          py: 2,
          mb: 2,
          backgroundColor: `rgba(15, 23, 42, 0.75)`,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          // On large screens, visually hide the sticky header
          display: { lg: 'none' },
        }}
      >
        <Typography variant="h4">{title}</Typography>
      </Box>
      {children}
    </Box>
  )
}
