import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { spacing } from '@mui/system';
import { Rating, Stack } from '@mui/material';

const MediaCard=()=> {

const cardStyle={
    marginLeft:'95px',
    marginTop:'55px'
}
const typographyStyle={
    marginLeft:'15px',
    marginTop:'5px',
}
    return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Learn Python: The Complete Python Programming Course
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Avinash Jain, The Codex
               </Typography>
          <Stack spacing={3} align="center" direction="column">
             <Typography gutterBottom variant="h9" color="red" 
      style={typographyStyle}        
       component="div">4.5
       <span>
    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
            </span>
      <Typography  variant="h9" color={'black'} >(2,160)</Typography>
      </Typography>
          </Stack>
          <Typography variant="h5" style={typographyStyle}>
      ₹385
    </Typography>

       </CardContent>
    </Card>
  );
}
export default MediaCard;