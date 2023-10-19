"use client"
import Logo from "@/res/svg/logo.svg"
import Image from "next/image";
import { Color } from "@/res/components/main-colors";
//** MUI Components */
import * as React from 'react'
import { Box, Stepper, StepLabel, Button, Typography, CircularProgress, Grid, LinearProgress, IconButton, Tooltip, Menu, MenuItem } from '@mui/material'

//** Steps */
import { FormLayout } from "@/res/components/form-layout"
import { Welcome } from './steps/welcome'

//* States
import { formStateAtom, handleBackArrow, PersonalInfoAtom } from './form-state'
import { useAtom } from 'jotai'
import { Suspense, useState } from 'react'
import { Icon } from '@iconify/react';

//* Pages
import { PersonalInfoPage } from "./steps/personal-info"
import { DietGoalPage } from './steps/diet-goal'
import { BodyMeasurementsPage } from './steps/body-measurements'
import { DietTypePage } from './steps/diet-type'
import {PaymentPage} from './steps/payment'

const StepForm = () => {
    const [formState, setActiveStep] = useState({
      activeStep: 0,
    })
    const [form, setForm] = useAtom(formStateAtom)
  const [backArrow, setHandleBackArrow] = useAtom(handleBackArrow)
    const [personalInfo] = useAtom(PersonalInfoAtom)

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);
    const menuClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const menuClose = () => {
      setAnchorEl(null);
    };

    const handleNext = () => {
      setActiveStep({
        ...formState,
        activeStep: formState.activeStep + 1,
      })
    }
  
    const handleBack = () => {
        setActiveStep({
            ...formState,
            activeStep: formState.activeStep - 1,
        })
    }
  
    // const handleFinish = () => {
    //   setActiveStep(Step.PAYMENT_PROCESSING)
    // }
  
    const handleReset = () => {
      setActiveStep({
        ...formState,
        activeStep: 0,
      })
    }

    const Steps = () => {
        switch (formState.activeStep) {
            // case 0:
            //     return <Welcome handleNext={handleNext}/>
          case 0:
            return <PersonalInfoPage handleNext={handleNext}/>
          case 1:
            return <DietGoalPage handleNext={handleNext}/>
          case 2:
            return <BodyMeasurementsPage handleNext={handleNext}/>
          case 3:
            return <DietTypePage handleNext={handleNext}/>
          case 4:
            return <PaymentPage handleNext={handleNext}/>

          default:
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <p>no more steps {personalInfo.email} {personalInfo.name}</p>
                </Suspense>
            )
        }
      }

    return (

                <FormLayout>

                <Box sx={{ width: '100%' }}>
                  <LinearProgress variant="determinate" sx={{
                    height: '5px',
                    borderRadius: '10px',
                    mb: 1,
                    bgcolor: '#E0E0E0',
                    '& .MuiLinearProgress-bar': {
                      bgcolor: `${Color.primary}`,
                    },
                  
                  }} value={(formState.activeStep / (5 - 1)) * 100} />
                </Box>
                <Grid container alignItems={"center"} spacing={2}>
                  <Grid item xs={4}>
                    <Tooltip title="Regresar" placement="bottom">
                    <IconButton onClick={()=>{
                      if(formState.activeStep > 0){
                        handleBack()
                      }
                      else{
                        window.location.href = "/"
                      }
                    }} 
                    disabled={backArrow}
                    sx={{
                      color: '#000',
                    }}>         
                      <Icon icon="solar:arrow-left-outline" />
                    </IconButton>
                    </Tooltip>
                  </Grid>

                    <Grid item xs={4} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                    <Image onClick={()=>{
                      window.location.href = "/"
                    }} src={Logo} alt={""} height={25} style={{
                      cursor: 'pointer'
                    }}/>

                    </Grid>

                  <Grid item xs={4} display={"flex"} flexDirection={"column"} alignItems={"flex-end"}>

                  <Tooltip title="Opciones" placement="bottom">
                    <IconButton 
                    id='help-button'
                    aria-controls={openMenu ? 'help-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu? 'true': undefined}
                    onClick={menuClick}
                    sx={{
                      color: '#000',
                    }}>   
                      <Icon icon="tabler:dots" />
                    </IconButton>

                    </Tooltip>

                    <Menu
                            id="help-menu"
                            aria-labelledby="help-button"
                            anchorEl={anchorEl}
                            open={openMenu}
                            onClose={menuClose}
                            anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'left',
                            }}
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'left',
                            }}
                    >

                      <MenuItem onClick={()=> {
                            // Clear the local storage
                            localStorage.clear();

                            // Reload the page
                            location.reload();    

                      }}>
                      <Icon icon={'carbon:reset'} />
                      <Box width={8} />
                      Reiniciar
                      </MenuItem>
                      {/* <MenuItem>
                      <Icon icon={'tabler:help'} />
                      <Box width={8} />
                      Ayuda
                      </MenuItem> */}
                    </Menu>
   
                  </Grid>
                </Grid>
                    {Steps()}
                </FormLayout>




    )
}

export default StepForm