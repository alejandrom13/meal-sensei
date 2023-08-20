import { FormButton } from "@/res/components/button"
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography, Card, Icon } from "@mui/material"
import { useState } from "react";
import RadioCard from "@/res/components/radio-card";
import Icon1 from '@/res/svg/form/goal1.svg'
import Icon2 from '@/res/svg/form/goal2.svg'
import Icon3 from '@/res/svg/form/goal3.svg'
import { PersonalInfoAtom } from "../form-state";
import { useAtom } from "jotai";


export const DietGoalPage = ({handleNext}:any) => {

    const [dietGoal, setDietGoal] = useAtom(PersonalInfoAtom);
    const value = dietGoal.dietGoal;    

    const handleChange = (value:any) => {
        setDietGoal({...dietGoal, dietGoal: value})
    };

    
    return (
        <div>
            <h1>Cuál es tu meta?</h1>
            <Typography variant='body1' color={'grey'}>Elige la meta que deseas lograr</Typography>

            <br/>

            <RadioCard
                    value="Perder Peso"
                    label="Perder Peso"
                    selectedValue={value}
                    onChange={handleChange} 
                    svgIcon={Icon1}
                    altImage="Perder Peso"
                    />
                    
            <RadioCard
                    value="Ganar Peso"
                    label="Ganar Peso"
                    selectedValue={value}
                    onChange={handleChange} 
                    svgIcon={Icon2}
                    altImage="Ganar Peso"
                    />

            <RadioCard
                    value="Mantener Peso"
                    label="Mantener mi Peso"
                    selectedValue={value}
                    onChange={handleChange}
                    svgIcon={Icon3}
                    altImage="Mantener Peso"
                    />

            <FormButton onClick={handleNext}>Continuar</FormButton>
        </div>
    )
}