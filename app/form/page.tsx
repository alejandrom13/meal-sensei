"use client"
//** MUI Components */
import * as React from 'react'
import { Box, Stepper, StepLabel, Button, Typography } from '@mui/material'

//** Steps */
import { PersonalInfo } from "./steps/personal-info"
import { FormLayout } from "@/res/components/form-layout"
import { Welcome } from './steps/welcome'

//* States
import { formStateAtom, PersonalInfoAtom } from './form-state'
import { useAtom } from 'jotai'
import { Suspense, useState } from 'react'
import { Icon } from '@iconify/react';
import { Provider as JotaiProvider } from 'jotai'

const StepForm = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [personalInfo] = useAtom(PersonalInfoAtom)

    const handleNext = () => {
      setActiveStep(activeStep + 1)
    }
  
    const handleBack = () => {
        setActiveStep(activeStep - 1)
    }
  
    // const handleFinish = () => {
    //   setActiveStep(Step.PAYMENT_PROCESSING)
    // }
  
    const handleReset = () => {
      setActiveStep(0)
    }

    const Steps = () => {
        switch (activeStep) {
            // case 0:
            //     return <Welcome handleNext={handleNext}/>
          case 0:
            return <PersonalInfo handleNext={handleNext}/>
          default:
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <p>no more steps {personalInfo.email} {personalInfo.name}</p>
                </Suspense>
            )
        }
      }

    return (
        <JotaiProvider>

                <FormLayout>
                <Button color='primary' variant='text' startIcon={<Icon icon="bi:arrow-left" />} onClick={handleBack} sx={{height: '50px', textTransform: 'none',}}
                {...(activeStep === 0 && { disabled : true})}
                >
                    Atras
                </Button>
                    {Steps()}
                </FormLayout>

        </JotaiProvider>

    )
}

export default StepForm