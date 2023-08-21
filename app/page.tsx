'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Button, Container, TextField } from '@mui/material'
import { LandingLayout } from './landing/layout'

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

      <LandingLayout></LandingLayout>


    </main>
  )
}