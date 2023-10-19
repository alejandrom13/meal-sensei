import { LandingNavBar } from "./navbar"
import { Container } from "@mui/material"
import { LandingHeader } from "./header"
import { LandingSteps } from "./steps"
import { Metadata } from "next"

export interface LayoutProps {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: {
      default: 'MealSensei - Dietas personalizadas con IA',
      template: '%s'
    },
    description: 'MealSensei es una plataforma que te permite crear dietas personalizadas con inteligencia artificial.',
    robots: 'Just crawl it',
    openGraph: {
      type: 'website',
      locale: 'es_DO',
      title: 'MealSensei - Dietas personalizadas con IA',
      description: 'MealSensei es una plataforma que te permite crear dietas personalizadas con inteligencia artificial.',
      url: 'https://mealsensei.app',
      images: [
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/jobswipe-d1e46.appspot.com/o/Screenshot%202023-10-18%20at%207.58.13%E2%80%AFPM.png?alt=media&token=09d6d942-56d0-4803-b246-04f7b3ace639&_gl=1*1dtbgvf*_ga*MTY3NzYwMTUyNy4xNjg3MDI1NTI0*_ga_CW55HF8NVT*MTY5NzY3MzUwOC41Mi4xLjE2OTc2NzM1MzUuMzMuMC4w',
          alt: 'MealSensei',
        },
      ],
    },
  
  }
  

export const LandingLayout = () => {
    return (
        <Container maxWidth="md"  >
            <LandingNavBar />
            <LandingHeader />
            <LandingSteps />
           
        </Container>
    )
}