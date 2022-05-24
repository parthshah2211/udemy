import React from "react";
import { Box, Button, Grid, List, Stack, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
const Footer=()=>{
    const FooterStyle={
        marginLeft:'-135px',
        marginTop:'25px',
    }
    return (
        <>
        <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        p: 1,
        height:'400px',
        width:'auto',
        m: 1,
        bgcolor: 'black',
        borderRadius: 1,
      }}>
      
<Grid container align="center" direction="row">
    <Grid item sm={2} >

    <Stack align="center" direction="column"  spacing={2} style={FooterStyle}>
    <List  style={{color:'white'}}>
    Udemy Business
    </List>
    <List  style={{color:'white'}}>
    Tech On Udemy
    </List>
    <List  style={{color:'white'}}>
   Get the App
    </List>
    <List  style={{color:'white'}}>
    About us
    </List>
    <List  style={{color:'white'}}>
    Contact Us
    </List>
    <img src="/staticx/udemy/images/v7/logo-udemy-inverted.svg" style={{
        width:'91.07142857142857px',
        aspectRatio: 'auto 91.0714',

    }}></img>
    </Stack>
    </Grid>
    
    <Grid item sm={2} >

<Stack align="center" direction="column"  spacing={2} style={FooterStyle}>
<List  style={{color:'white'}}>
Udemy Business
</List>
<List  style={{color:'white'}}>
Tech On Udemy
</List>
<List  style={{color:'white'}}>
Get the App
</List>
<List  style={{color:'white'}}>
About us
</List>
<List  style={{color:'white'}}>
Contact Us
</List>
{/* <img src="/staticx/udemy/images/v7/logo-udemy-inverted.svg" style={{
    width:'91.07142857142857px',
    aspectRatio: 'auto 91.0714',

}}></img> */}
</Stack>
</Grid>

<Grid item sm={2} >
    <Stack align="center" direction="column"  spacing={2} style={FooterStyle}>
    <List  style={{color:'white'}}>
    Udemy Business
    </List>
    <List  style={{color:'white'}}>
    Tech On Udemy
    </List>
    <List  style={{color:'white'}}>
   Get the App
    </List>
    <List  style={{color:'white'}}>
    About us
    </List>
    <List  style={{color:'white'}}>
    Contact Us
    </List>
    </Stack>
                    </Grid>
                    <Grid item sm={6} direction='row'>
                            <Stack direction="row" style={{marginLeft:'450px'}}>
                            <Button style={{ backgroundColor: 'white', padding: '10px', width: '90px' }}
                              startIcon={<LanguageIcon></LanguageIcon> 
                    }  
                            >English</Button>
                            </Stack>                   
</Grid>
</Grid>
</Box>
        </>
    )
}
export default Footer;