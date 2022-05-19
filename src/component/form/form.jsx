
import  React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles =makeStyles({
    formField: {
        alignItems: 'center',
        marginRight: "50%",
    }
})
const Form= () => {
 const classes = useStyles();
    return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-misaligned"
        label="userName"
        required
      />
       <TextField
        helperText="Please enter your email"
        id="demo-helper-text-misaligned"
        label="email"
        required
      />
       <TextField
        helperText="Please enter your password"
        id="demo-helper-text-misaligned"
        label="Password"
        required
      />
       <Button>Submit</Button>
    </Box>
  );
}
export default Form;