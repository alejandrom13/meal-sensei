import { Alert, AlertTitle, Grid, Stack, Typography } from "@mui/material"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormInput } from "@/res/components/input"
import { useAtom } from "jotai"
import { FormButton } from "@/res/components/button"
import { PersonalInfoAtom } from "../form-state"
import { useForm } from "react-hook-form"
import  RadioTab  from "@/res/components/radioTab"

const schema = yup.object().shape({
    heightFeet: yup.number().required('Altura es requerida').min(3, '"Altura debe ser mayor a 3').max(9, 'Altura debe ser menor a 9').integer('Altura inválida').typeError('Altura inválida'),
    heightInches: yup.number().required('Pulgadas requeridas').min(0, ' a 0').max(11, 'Altura debe ser menor a 11').integer('Altura inválida').typeError('Altura inválida'),
    weight: yup.number().required('Peso es requerido').min(80, 'Peso debe ser mayor a 80').max(500, 'Peso debe ser menor a 500').integer('Peso inválido').typeError('Peso inválido'),
    weightGoal: yup.number().required('Peso es requerido').min(80, 'Peso debe ser mayor a 80').max(500, 'Peso debe ser menor a 500').integer('Peso inválido').typeError('Peso inválido')
})

export const BodyMeasurementsPage = ({handleNext}:any) => {
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
        <div>
        <h1>Medidas Corporales</h1>
        <Typography variant='body1' color={'grey'}>Vamos a tomar tus medidas corporales de peso y altura.</Typography>
        <br/>


        <RadioTab handleNext={handleNext}></RadioTab>




        </div>
    )
}