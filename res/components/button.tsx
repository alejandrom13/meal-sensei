import { Button } from "@mui/material"
import React from "react"

interface ButtonProps {
    disabled?: boolean,
    children: React.ReactNode
    type?: 'submit' | 'button' | 'reset' | undefined
    onClick?: () => any

}

export const FormButton = (props: ButtonProps) => {
    return (
        <Button
        {...props}
        variant='contained'
        fullWidth
        autoCapitalize="none"
        sx={{
            height: '56px',
            backgroundColor: '#FFC159',
            color: '#fff',
            fontWeight: 'semi-bold',
            fontSize: '18px',
            borderRadius: '10px',
            textTransform: 'none',
            boxShadow: 'none',
            mt: 3,
        }}
        >
            {props.children}
        </Button>
    )

}