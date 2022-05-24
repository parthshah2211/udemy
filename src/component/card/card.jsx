import  React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Paper,useMediaQuery } from '@mui/material';
import { theme } from '../../theme';

export default function ContentCard() {
    
const isMatch = useMediaQuery(theme.breakpoints.down("xl"));
console.log(isMatch);
  return (
    <>
      {isMatch ? (
        <Box
            sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width:'100%',
          height: '285px',
        },
            }}
        >
          <Paper elevation={3} square>
        <Typography variant="h3">
        Our biggest sale of the <br></br>season
        </Typography>
        <Typography variant="h4">
        Stock up on courses from ₹385. From coding to leadership to photography, you can learn almost anything. Ends May 25.
      </Typography>
  
      </Paper>

        </Box>
      ) : (
          <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 585,
          height: 188,
          marginLeft: '220px',
          marginTop: '-315px'
        },
            }}
            
          >
             <Paper elevation={8} square>
        <Typography variant="h3">
        Our biggest sale of the <br></br>season
        </Typography>
        <Typography variant="h4">
        Stock up on courses from ₹385. From coding to leadership to photography, you can learn almost anything. Ends May 25.
      </Typography>
  
      </Paper>
      </Box>
      )
      }
 
   
    </>
  );
}
