import { LandingNavBar } from "./navbar"
import { Container } from "@mui/material"
import { LandingHeader } from "./header"
import { LandingSteps } from "./steps"

export interface LayoutProps {
    children: React.ReactNode
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