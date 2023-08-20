import { Container } from "@mui/material"

export interface LayoutProps {
    children: React.ReactNode
}

export const FormLayout = ({children}:LayoutProps) => {
    return (
        <Container maxWidth="sm" sx={{paddingBottom: '2rem'
        }} >
            {children}
        </Container>
    )
}