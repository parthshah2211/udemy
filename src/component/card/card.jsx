import  React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);
export default function ContentCard() {
    
return (
    <>
    <Card sx={{ minWidth: 275 }} variant="outlined" 
    style={{
        marginTop: '-335px',
        marginLeft: '120px',
        width: '28%',

    }}
    >
      <CardContent style={{padding:'22px',
                          
      }}>
        <Typography variant="h5" component="div">
          {bull}Our biggest sale of the <br></br>season
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{marginTop:'8px'}}>
        Stock up on courses from ₹385. From coding to leadership to photography, you can learn almost anything. Ends May 25.
        </Typography>
            </CardContent>
    </Card>
    </>
  );
}
