import { FormInput } from "@/res/components/input"
import { Button, Checkbox, FormControlLabel, Grid, MenuItem, TextField } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form"
import { useAtom, useAtomValue } from "jotai"
import { PersonalInfoAtom } from "../form-state"
import { FormButton } from "@/res/components/button"
import { FormSelect } from "@/res/components/select"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'



const schema = yup.object().shape({
    name: yup.string().required('Nombre es requerido'),
    email: yup.string().email('Correo electrónico inválido').required('Correo Electrónico es requerido'),
    age: yup.number().required('Edad es requerida').min(18, 'Minimo 18 años').max(99, 'Máximo 99 años').integer('Edad inválida').typeError('Edad inválida'),
    gender: yup.string().required('Género es requerido'),
})

export const PersonalInfo = ({handleNext}: any) => {
    
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
        <div>
        <h1>Personal Info</h1>

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
                id='age'
                label='Edad *'
                type='number'
                control={control}
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

   
        <FormControlLabel
            control={
              <Checkbox  name="gilad" />
            }
            label={
                <p style={{
                    fontSize: '14px',
                }}>Al continuar estas de acuerdo con los <a href="/">términos y condiciones</a>, política de privacidad</p>
            }
            sx={{
                mb: -1,
            }}
          />

        <FormControlLabel
            control={
              <Checkbox  name="gilad" />
            }
            label={
                <p  style={{
                    fontSize: '14px',
                }}>Me gustaría recibir actualizaciones sobre productos y servicios, y newsletter por correo.</p>
            }
          />




            

            <FormButton type="submit">
                Continuar
            </FormButton>
        </form>


        </div>
    )
}

