'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Button, Container, TextField } from '@mui/material'

export default function Home() {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

   await fetch('/api/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({
        prompt: data,
      }),
    })
    

    console.log(data)
  }

  return (
    <main>
      <Container maxWidth="sm">
        <h1>Meal sensei</h1>

        <form onSubmit={handleSubmit}>
        <TextField id="name" name='name' label="Nombre" variant="outlined" fullWidth sx={
          {
            paddingBottom: '1rem'
          }
        }/>
        <TextField id="email" name='email' label="Correo Electrónico" variant="outlined" fullWidth sx={
          {
            paddingBottom: '1rem'
          }
        }/>        
        <TextField id="weight" name='weight' label="Peso" variant="outlined" fullWidth sx={
          {
            paddingBottom: '1rem'
          }
        }/>
          <TextField id="weight_goal" name='weight_goal' label="Meta de peso" variant="outlined" fullWidth sx={
          {
            paddingBottom: '1rem'
          }
        }/>
          <TextField id="age" label="Edad" name='age' variant="outlined" fullWidth sx={
          {
            paddingBottom: '1rem'
          }
        }/>
                  <TextField id="gender" name='gender' label="Genero" variant="outlined" fullWidth sx={
          {
            paddingBottom: '1rem'
          }
        }/>

        <Button color='primary' type='submit' variant='outlined' fullWidth sx={{
          height: '50px'
        }}>
          Enviar
        </Button>
        </form>

      </Container>  
    </main>
  )
}
