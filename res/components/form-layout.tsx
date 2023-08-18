import { Container } from "@mui/material"

export interface LayoutProps {
    children: React.ReactNode
}

export const FormLayout = ({children}:LayoutProps) => {
    return (
        <Container maxWidth="sm" sx={{
        }} >
            {children}
        </Container>
    )
}