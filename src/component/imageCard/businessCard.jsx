import { Button, Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const BusinessCard = () => {
    return (
        <>
            <Box
            sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 1,
        height:'500px',
        width:'auto',
        m: 1,
        bgcolor: 'white',
        borderBlockColor:'red'
      }}
        >
                <Grid container direction="row"  >
   
                    <Grid item sm={4}>
                        <Card sx={{ minWidth: 275 }} 
    style={{
        marginTop: '3px',
        marginLeft: '410px',
        width: '48%',
        height: '450px',

    }}
    >
      <CardContent style={{padding:'22px',            
      }}>
        <img src="/staticx/udemy/images/v7/logo-ub.svg" style={{   height: '20px',
                                width: '50%',
}}>

                                </img>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ marginTop: '8px' }}>
                            Get unlimited access to 15,000+ of Udemy’s top courses for your team. Learn and improve skills across business, tech, design, and more.
                                </Typography>
                                  <Button variant="outlined" style={{backgroundColor:'black'}}>Get Udemy BUsiness</Button>
            </CardContent>
    </Card>
    </Grid>
                    <Grid item sm={8}>
                        <Stack container direction="column" style={{
                                display: 'flex',
                                marginLeft:'350px',
                                verticalAlign: 'center'
                        }}>
                            <img src='https://s.udemycdn.com/home/non-student-cta/ub-1x-v3.jpg' style={{
                                height: '450px',
                                width: '50%',
                        }}></img>    
                    </Stack>
                    </Grid>
    </Grid>
            </Box>
        </>
    )
}
export default BusinessCard;