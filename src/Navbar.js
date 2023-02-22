import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import InfoIcon from '@mui/icons-material/Info';

export default function ButtonSizes() {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button sx={{borderColor: 'black', color: 'black'}} variant="outlined" size="medium" startIcon={<HomeIcon />}>
          Home
        </Button>
        <Button sx={{borderColor: 'black', color: 'black'}} variant="outlined" size="medium" startIcon={<ContactsIcon />}>
          About
        </Button>
        <Button sx={{borderColor: 'black', color: 'black'}} variant="outlined" size="medium" startIcon={<InfoIcon />}>
          Contact
        </Button>
      </div>
    </Box>
  );
}