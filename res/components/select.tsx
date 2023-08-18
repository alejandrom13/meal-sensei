import React from 'react';
import { Controller } from 'react-hook-form';
import Select from '@mui/material/Select';
import { Box, FormControl, FormHelperText, InputLabel, MenuItem } from '@mui/material';

interface FormSelectProps {
    id: string;
    control: any;
    label: string;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    rules?: any;
    children?: React.ReactNode;
}

export const FormSelect = ({id, control, label, type, placeholder, disabled, rules, children}: FormSelectProps) => {
    return (
        <Controller
            name={id}
            control={control}
            rules={rules}
            render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
                
                    <FormControl fullWidth error sx={{
                        mb: 2,
                        
                    }}>
                    <InputLabel id={id}
                    sx={{
                        
                    }}>{label}</InputLabel>
                    <Select
                        type={type}
                        placeholder={placeholder}
                        //name={id}
                        disabled={disabled}
                        //helperText={error ? error.message : null}
                        error={!!error}
                        onChange={onChange}
                        value={value}
                        fullWidth
                        label={label}
                        variant='outlined'
                        sx={{
                            mb: 0,
                            borderRadius: 2.5,
                            backgroundColor: '#fff',
                            
                        }}
                    >
                        {children}
                        </Select> 
                    <FormHelperText>{error ? error.message : null}</FormHelperText>
                    </FormControl>

                

            )}
        />
    );

}