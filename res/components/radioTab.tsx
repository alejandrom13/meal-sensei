import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { LbFeetForm } from './body/LbFeet';
import { CmKgForm } from './body/CmKg';
import { PersonalInfoAtom } from '@/app/form/form-state';
import { useAtom } from 'jotai';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;

}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 4 }}>
          <Typography sx={{
            
          }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface RadioTabProps {
    handleNext: () => void
}

export default function RadioTab(props: RadioTabProps) {
  const [value, setValue] = useAtom(PersonalInfoAtom);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue({
        ...value,
        selectedMesurement: newValue
    });
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value.selectedMesurement} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{
            textTransform: 'none',
          }} label="Pies, Libras" {...a11yProps(0)} />
          <Tab sx={{
            textTransform: 'none',
          }} label="Cm, Kg" {...a11yProps(1)} />
 
        </Tabs>
      </Box>
      <CustomTabPanel value={value.selectedMesurement} index={0}>
       <LbFeetForm handleNext={props.handleNext}></LbFeetForm>
      </CustomTabPanel>
      <CustomTabPanel value={value.selectedMesurement} index={1}>
          <CmKgForm handleNext={props.handleNext}></CmKgForm>
      </CustomTabPanel>
    </Box>
  );
}
