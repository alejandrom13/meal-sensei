import { PersonalInfoAtom } from '@/app/form/form-state';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Stack, Alert, AlertTitle } from '@mui/material';
import { useAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { FormButton } from '../button';
import { FormInput } from '../input';

const schema = yup.object().shape({
    heightCm: yup.number().required('Altura es requerida').min(90, 'Altura debe ser mayor o igual a 90cm').max(245, 'Altura debe ser menor a 245cm').integer('Altura inválida').typeError('Altura inválida'),
    weightKg: yup.number().required('Peso es requerido').min(40, 'Peso debe ser mayor a 40kg').max(179, 'Peso debe ser menor a 179kg').integer('Peso inválido').typeError('Peso inválido'),
    weigthGoalKg: yup.number().required('Peso es requerido').min(40, 'Peso debe ser mayor a 40kg').max(179, 'Peso debe ser menor a 179kg').integer('Peso inválido').typeError('Peso inválido')
})

export const CmKgForm = ({handleNext}:any) => {
    const [bodyMeasurements, setBodyMeasurements] = useAtom(PersonalInfoAtom);

    const { control, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
        values: bodyMeasurements,

    })

    const onSubmit = (data: any) => {
        setBodyMeasurements({...bodyMeasurements, ...data})
        handleNext()
    }


    return (
        <div className="">
        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">


        <FormInput
            id='heightCm'
            label='Altura *'
            type='number'
            control={control}
            adornment="Centímetros"
            shrink
            placeholder="Altura"
            rules={{ required: 'Altura es requerida', maxLength: 1 }}
        />


        <FormInput
            id='weightKg'
            label='Peso *'
            type='number'
            control={control}
            adornment="Kilogramos"
            shrink
            placeholder="Peso"
            rules={{ required: 'Peso es requerido' }}
        />

<FormInput
    id='weigthGoalKg'
    label='Meta de Peso *'
    type='number'
    control={control}
    adornment="Kilogramos"
    shrink
    placeholder="Meta de Peso"
    rules={{ required: 'Peso es requerido' }}
/>

<Stack sx={{ width: '100%', pb: 2, pt:0 }} spacing={2}>
    
<Alert severity="info" sx={{
 
}}>
    <AlertTitle>Midiendo tu IMC</AlertTitle>
    Usaremos estos datos para medir tu <strong>Índice de masa corporal</strong>. Se usa para identificar las categorías de peso que pueden llevar a problemas de salud.</Alert>

</Stack>

<FormButton onClick={handleSubmit(onSubmit)}>Continuar</FormButton>
</form>

        </div>
    );
}