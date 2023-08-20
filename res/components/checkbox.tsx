import { Checkbox, FormControlLabel } from "@mui/material"
import { Controller } from "react-hook-form"

interface FormCheckboxProps {
    id: string
    label: string
    control: any
    rules: any
}

export const FormCheckbox = (props: FormCheckboxProps) => {
    const {id, label, control, rules} = props
    return (
        <Controller
            name={id}
            control={control}
            rules={rules}
            render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={onChange}
                            checked={value}
                            color={'primary'}
                            sx={{
                                color: error ? 'red' : 'primary',
                            }}
                        />
                    }
                    label={<p style={{
                        fontSize: '14px',
                    }}>{label}</p>}
                />
            )}
        />
    )

}