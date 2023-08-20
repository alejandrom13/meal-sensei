import { FormButton } from "@/res/components/button"
import { FormCheckbox } from "@/res/components/checkbox"
import { yupResolver } from "@hookform/resolvers/yup"
import { Checkbox, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { useAtom } from "jotai"
import { useForm } from "react-hook-form"
import { PersonalInfoAtom } from "../form-state"
import * as yup from 'yup'
import React from "react"

const dietList = [
    'Soy Vegano (a)',
    'Soy Vegetariano (a)',
    'Sin Gluten',
    'Sin Lactosa',
    'Sin Azúcar',
]

export const DietTypePage = ({handleNext}:any) => {
    const [checked, setChecked] = React.useState([null as unknown as number]);

    const handleToggle = (value: number) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };
    return (
        <div>
            <h1>Selección de Dieta</h1>
            <Typography variant='body1' color={'grey'}>Sigues alguna de estas dietas?</Typography>

            <br/>

            <List sx={{ width: '100%' }}>
      {dietList.map((value, index) => {
        const labelId = `checkbox-list-label-${value}`;
        const count = dietList.length - 1

        return (
          <ListItem
            key={index}

            disablePadding
            divider
          >
            <ListItemButton role={undefined} onClick={handleToggle(index)} disableGutters disableTouchRipple>
            <ListItemText id={labelId} primary={value}/>

              <ListItemIcon>
                <Checkbox
                  edge="end"
                  checked={checked.indexOf(index) !== -1}
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