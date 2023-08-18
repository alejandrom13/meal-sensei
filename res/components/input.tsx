import { Controller } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import { InputAdornment } from '@mui/material'

import { type } from 'os'

interface FormInputProps {
  id: string
  control: any
  label: string
  type?: string
  placeholder?: string
  disabled?: boolean
  rules?: any
  required?: boolean

}

export const FormInput = ({ id, control, label, type, placeholder, disabled, rules, required  }: FormInputProps) => {
  return (
    <Controller
      name={id}
      {...(required && { required: true })}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
        <TextField
          InputProps={{
            sx: {
                borderRadius: 2.5,
                //height: '56px',
                backgroundColor: '#fff',
            }
          }}
          type={type}
          placeholder={placeholder}
          name={id}
          disabled={disabled}
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant='outlined'
          sx={{
            mb: 2,
          }}
        />
      )}
    />
  )
}
