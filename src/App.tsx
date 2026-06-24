import { useEffect, useRef, useState, useCallback } from 'react'
import { Box } from '@mui/material'
import { Sidebar } from './components/Sidebar.tsx'
import { SectionWrapper } from './components/SectionWrapper.tsx'
import { About } from './components/About.tsx'
import { Eduction } from './components/Eduction.tsx'
import { Experience } from './components/Experience.tsx'
import { Projects } from './components/Projects.tsx'
import {SiteDescription} from "./components/SiteDescription.tsx";

const SECTIONS = ['about', 'education', 'experience', 'projects'] as const

function App() {
  const spotlightRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState<string>('about')

  // Mouse-following spotlight
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (spotlightRef.current) {
      spotlightRef.current.style.background = `radial-gradient(
        600px circle at ${e.clientX}px ${e.clientY}px,
        rgba(29, 78, 216, 0.15),
        transparent 80%
      )`
    }
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  // Scroll spy with IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          })
        },
        { rootMargin: '-20% 0px -60% 0px' }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <div className="spotlight" ref={spotlightRef} />
      <Box
        sx={{
          maxWidth: '1280px',
          mx: 'auto',
          px: 3,
          py: { xs: 6, md: 8, lg: 0 },
          minHeight: '100vh',
          display: { lg: 'flex' },
          justifyContent: { lg: 'space-between' },
          gap: { lg: 2 },
        }}
      >
        <Sidebar activeSection={activeSection} sections={[...SECTIONS]} />

        <Box
          component="main"
          id="content"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { lg: '52%' },
            py: { lg: 12 },
          }}
        >
          <SectionWrapper id="about" label="About me" title="About">
            <About />
          </SectionWrapper>

          <SectionWrapper id="education" label="Education" title="Education">
            <Eduction />
          </SectionWrapper>

          <SectionWrapper id="experience" label="Work experience" title="Experience">
            <Experience />
          </SectionWrapper>

          <SectionWrapper id="projects" label="Selected projects" title="Projects">
            <Projects />
          </SectionWrapper>
          <SiteDescription/>
        </Box>
      </Box>
    </Box>
  )
}

export default App
