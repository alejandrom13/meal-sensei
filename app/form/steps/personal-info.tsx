import { FormInput } from "@/res/components/input"
import { Button, Checkbox, FormControlLabel, Grid, MenuItem, TextField } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form"
import { useAtom, useAtomValue } from "jotai"
import { PersonalInfoAtom } from "../form-state"
import { FormButton } from "@/res/components/button"
import { FormSelect } from "@/res/components/select"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormCheckbox } from "@/res/components/checkbox"
import { motion } from "framer-motion"
import { useState } from "react"


const schema = yup.object().shape({
    name: yup.string().required('Nombre es requerido'),
    email: yup.string().email('Correo electrónico inválido').required('Correo Electrónico es requerido'),
    emailConfirmation: yup.string().oneOf([yup.ref('email')], 'Los correos electrónicos deben coincidir').required('Confirmar Correo Electrónico es requerido'),
    age: yup.number().required('Edad es requerida').min(18, 'Minimo 18 años').max(99, 'Máximo 99 años').integer('Edad inválida').typeError('Edad inválida'),
    gender: yup.string().required('Género es requerido'),
    termsAndConditions: yup.boolean().required('Términos y condiciones es requerido').oneOf([true], 'Términos y condiciones es requerido'),
    receiveUpdates: yup.boolean(),
    budget: yup.string().required('Presupuesto es requerido'),
})

export const PersonalInfoPage = ({handleNext, x}: any) => {

    const [personalInfo, setFormState] = useAtom(PersonalInfoAtom)

    const { control, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
        values: personalInfo,
    })

    const onSubmit = (data: any) => {
        setFormState({...personalInfo, ...data})
        handleNext()
    }

    return (
        <motion.div

        >
        <h1>Ingresa tus datos</h1>
        <br/>

        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
            <FormInput
                id='name'
                label='Nombre *'
                type='text'
                control={control}
                rules={{ required: 'Nombre es requerido' }}
            />

            <FormInput
                id='email'
                label='Correo Electrónico *'
                type='email'
                control={control}
                rules={{ required:  "Correo Electrónico es requerido", pattern: {value: /\S+@\S+\.\S+/, message: "Correo Electrónico inválido"}}}
            />

            <FormInput
                id='emailConfirmation'
                label='Confirmar Correo Electrónico *'
                type='email'
                control={control}
                rules={{ required:  "Correo Electrónico es requerido"}}
            />
            
            <FormInput
                id='age'
                label='Edad *'
                
                type='number'
                control={control}
                shrink
                placeholder="Ingresa tu edad"
                rules={{ required: "Edad es requerida", min: 18, max: 99, valueAsNumber: true, message: "Edad inválida" }}
            />



            <FormSelect
                id="gender"
                label="Selecciona tu género *"
                control={control}
                rules={{ required: "Género es requerido" }}
                //placeholder="Selecciona tu género"

            >
                <MenuItem value={'Masculino'}>Masculino</MenuItem>
                <MenuItem value={'Femenino'}>Femenino</MenuItem>

            </FormSelect>

            <FormSelect
                id="budget"
                label="Selecciona tu presupuesto *"
                control={control}
                rules={{ required: "Presupuesto es requerido" }}
                //placeholder="Selecciona tu género"

            >
                <MenuItem value={'Bajo'}>Bajo</MenuItem>
                <MenuItem value={'Medio'}>Medio</MenuItem>
                <MenuItem value={'Alto'}>Alto</MenuItem>


            </FormSelect>
{/* 
            <table>
                <tr>
                    <td>
                    <Checkbox name="termsAndConditions"/>
                    </td>
                    <td>
                    <p>Al continuar estas de acuerdo con los términos y condiciones, política de privacidad</p>
                    </td>
                </tr>
            </table> */}

   
            <FormCheckbox
                id="termsAndConditions"
                label="Al continuar estas de acuerdo con los términos y condiciones, política de privacidad *"
                control={control}
                rules={{ required: "Términos y condiciones es requerido" }}
                //placeholder="Selecciona tu género"
             />

            <FormCheckbox
                id="receiveUpdates"
                label="Me gustaría recibir actualizaciones sobre productos y servicios, y newsletter por correo."
                control={control}
                rules={{ required: "Términos y condiciones es requerido" }}
                //placeholder="Selecciona tu género"
             />

            <FormButton type="submit">
                Continuar
            </FormButton>
        </form>


        </motion.div>
    )
}

