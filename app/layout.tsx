
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import Hotjar from '@hotjar/browser'

const inter = Inter({ subsets: ['latin'] })

// const siteId = 3621680;
// const hotjarVersion = 6;


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
        height: 630,
        width: 1200,
      },
    ],
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Hotjar.init(siteId, hotjarVersion);
  return (
    <html lang="en">
      <body className={inter.className} style={{
        backgroundColor: '#FEFCF6',
        WebkitTapHighlightColor: 'transparent',
      }}>{children}</body>

      
      <script src="//code.tidio.co/hloxn0ikzk1gofdydbknhy8tsaugibff.js" async></script>
    </html>
  )
}
