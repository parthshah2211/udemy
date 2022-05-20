import { Grid, Stack, Typography,Button } from "@mui/material";
import React from "react";
import ContentCard from "../card/card"
import MediaCard from "../card/imageCard";
import BusinessCard from "../imageCard/businessCard";
import ImageCard from "../imageCard/imageCard";
import FindOutCard from "../imageCard/imagecard2";
import ListCard from "../listCard/listCard";
import ProfileCard from './../imageCard/imageCard1';
const content=()=>{
    
const cardStyle={
    marginLeft:'95px',
    marginTop:'55px'
}
const typographyStyle={
    marginLeft:'95px',
    marginTop:'15px',
}
const buttonStyle={
    marginLeft:'95px',
    marginTop:'30px'
}
    return(
<>
<img src="https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/9e38995a-0b01-49fa-b474-e9d73787e4a4.png"
     style={{
         height:"400px",
         width:"1340px",
         marginLeft:"100px",
         marginTop:"30px"
     }}   

></img>
<ContentCard></ContentCard>
<Typography variant="h4" style={{ marginTop: "160px",
                                  marginLeft:"95px"      
}}>A broad selection of courses</Typography>

<Typography variant="h6" style={{ marginTop: "10px",
                                  marginLeft:"95px"      
}}>Choose from 185,000 online video courses with new additions published every month</Typography>
<Grid container align="center" direction="row">
    <Grid item sm={12} >
    <Stack align="center" direction="row"  spacing={8} style={cardStyle}>
    <Typography variant="h6"  >
        Python
    </Typography>
    <Typography variant="h6">
        Excle
    </Typography>
    <Typography variant="h6">
        Web development
    </Typography>
    <Typography variant="h6">
            JavaScript
    </Typography>
    <Typography variant="h6">
           Data Scince
    </Typography>
    <Typography variant="h6">
           AWS Certificate
    </Typography>
    <Typography variant="h6">
        Drawing
    </Typography>
    </Stack>
</Grid>
<Grid container>
<Grid item sm={10}>
<Typography variant="h4" style={{ marginTop: "60px",
                                  marginLeft:"95px"      
}}>Expand your career opportunities with Python</Typography>
</Grid>
<Grid item sm={12}></Grid>
<Typography     
style={typographyStyle}  
>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to</Typography>
</Grid>

    <Button variant="outlined" style={buttonStyle}>Explore Python</Button>

<Grid item sm={5}>
</Grid>
</Grid>
<Grid container align="center" direction="row">
    <Grid item sm={10} >
    <Stack align="center" direction="row"  spacing={4} style={cardStyle}>   
      <MediaCard></MediaCard>
      <MediaCard></MediaCard>
      <MediaCard></MediaCard>
      <MediaCard></MediaCard>      
</Stack>
    </Grid>
</Grid>
<Typography variant="h5" style={typographyStyle}>Students Are Viewing</Typography>
<Grid container align="center" direction="row">
    <Grid item sm={10} >
    <Stack align="center" direction="row"  spacing={4} style={cardStyle}>   
      <MediaCard></MediaCard>
      <MediaCard></MediaCard>
      <MediaCard></MediaCard>
      <MediaCard></MediaCard>      
</Stack>
    </Grid>
</Grid>
            <ListCard></ListCard>
            <ProfileCard></ProfileCard>
             <BusinessCard></BusinessCard>
            <FindOutCard></FindOutCard> 
</>
    );
}
export default content