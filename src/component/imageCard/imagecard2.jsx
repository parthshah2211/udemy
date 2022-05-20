import { Button, Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const FindOutCard = () => {
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
                    <Grid item sm={8}>
                        <Stack container direction="column" style={{
                                display: 'flex',
                                marginLeft:'350px',
                                verticalAlign: 'center'
                        }}>
                            <img src='https://s.udemycdn.com/home/non-student-cta/transform-1x-v3.jpg' style={{
                                height: '450px',
                                width: '50%',
                        }}></img>    
                    </Stack>
                    </Grid>
                    <Grid item sm={4}>
                        <Card sx={{ minWidth: 275 }} 
    style={{
        marginTop: '3px',
        marginLeft: '-300px',
        width: '48%',
        height: '450px',

    }}
    >
      <CardContent style={{padding:'22px',            
      }}>
        <Typography variant="h5" component="div">
      Transform your life through education
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ marginTop: '8px' }}>
                                    Learners around the world are launching new careers, advancing in their fields, and enriching their lives.
                                </Typography>
                                  <Button variant="outlined" style={{backgroundColor:'black'}}>Find Out How</Button>
            </CardContent>
    </Card>
    </Grid>
    </Grid>
            </Box>
        </>
    )
}
export default FindOutCard;