import { Container } from "@mui/material"
import { Provider as JotaiProvider } from 'jotai'

export interface LayoutProps {
    children: React.ReactNode
}

export const FormLayout = ({children}:LayoutProps) => {
    return (
        <JotaiProvider>

        <Container maxWidth="sm" sx={{paddingBottom: '2rem'
        }} >
            {children}
        </Container>
        </JotaiProvider>
    )
}