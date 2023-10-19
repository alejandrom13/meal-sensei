import { FormButton } from "@/res/components/button"
import { FormCheckbox } from "@/res/components/checkbox"
import { yupResolver } from "@hookform/resolvers/yup"
import { Checkbox, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { useAtom } from "jotai"
import { useForm } from "react-hook-form"
import { PersonalInfoAtom } from "../form-state"
import * as yup from 'yup'
import React, { use, useEffect, useState } from "react"

  const dietList = [
    {name: "Soy Vegano (a)", checked: false },
    {name: "Soy Vegetariano (a)", checked: false },
    {name: "Sin Gluten", checked: false },
    {name: "Sin Lactosa", checked: false },
    {name: "Sin Azúcar", checked: false },
  ]

export const DietTypePage = ({handleNext}:any) => {
    const [checked, setChecked] = React.useState([null as unknown as number]);
    const [selDiet, setDiet] = useAtom(PersonalInfoAtom);
    console.log(selDiet);

    const handleToggle = (value: number) => () => {
      setDiet({
        ...selDiet,
        dietPreferences: selDiet.dietPreferences.map((diet, index) => {
          if (index === value) {
            return {
              ...diet,
              checked: !diet.checked,
            };
          }
          return diet;
        }),
      });

      console.log(selDiet);
    };
    return (
        <div>
            <h1>Selección de Dieta</h1>
            <Typography variant='body1' color={'grey'}>Sigues alguna de estas dietas?</Typography>

            <br/>

            <List sx={{ width: '100%' }}>
      {selDiet.dietPreferences.map((value, index) => {
        const labelId = `checkbox-list-label-${value}`;
        const count = dietList.length -1
        
        

        return (
          <ListItem
            key={index}

            disablePadding
            divider
          >
            <ListItemButton role={undefined} onClick={handleToggle(index)} disableGutters disableTouchRipple>
            <ListItemText id={labelId} primary={value.name}/>

              <ListItemIcon>
                <Checkbox
                  edge="end"
                  checked={value.checked}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>



            <FormButton onClick={handleNext}>Continuar</FormButton>
        </div>
    )
}