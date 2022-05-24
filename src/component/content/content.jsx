import { Grid, Stack, Typography,Button,useMediaQuery, Tab ,Tabs, Box, Paper} from "@mui/material";
import React, { useState } from "react";
import { theme } from "../../theme";
import ContentCard from "../card/card"
import MediaCard from "../card/imageCard";
import BusinessCard from "../imageCard/businessCard";
import ImageCard from "../imageCard/imageCard";
import FindOutCard from "../imageCard/imagecard2";
import ListCard from "../listCard/listCard";
import ProfileCard from './../imageCard/imageCard1';

const content = () => {
    
  const [value, setValue] = useState();
const isMatch = useMediaQuery(theme.breakpoints.down("xl"));
console.log(isMatch);
const cardStyle={
    marginLeft:'15px',
    marginTop: '25px',
    marginRight:'15px',
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
            {isMatch ? (<>
              <img src="https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/4f8bb0a0-bacb-47b7-9dd5-cfe72681a0ea.png"
     style={{
         height:"300px",
         width:"100%",
       
         marginTop:"250px"
     }}   
    >
            </img>   
            </>) : (<>
                 <img src="https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/4f8bb0a0-bacb-47b7-9dd5-cfe72681a0ea.png"
     style={{
         height:"300px",
         width:"1340px",
         marginLeft:"102px",
         marginTop:"250px"
     }}   
    >
            </img>     
            </>)}
         
              <ContentCard>
     
            </ContentCard>

<Typography variant="h3" style={{ marginTop: "160px",
                                  marginLeft:"180px"      
}}>A broad selection of courses</Typography>

<Typography variant="h6" style={{ marginTop: "10px",
                                  marginLeft:"180px"      
}}>Choose from 185,000 online video courses with new additions published every month</Typography>

<Typography variant="h4" style={{ marginTop: "60px",
                                  marginLeft:"95px"      
}}>Expand your career opportunities with Python</Typography>

<Typography     
style={typographyStyle}  
>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to</Typography>
                 <Tabs  variant="scrollable"
                indicatorColor="black"
                textColor="secondary"
                value={value}
                onChange={(e, value) => setValue(value)}
 >
                <Tab label="Pythone" />
                <Tab label="Excle" />
                <Tab label="Web Development" />
                <Tab label="JavaScript" />
                <Tab label="Aws Certfication" />
                 <Tab label="Drawing" />
                              </Tabs>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: "90%",
          height: '690px',
          marginLeft: '80px',
          marginTop: '35px'
        },
            }}      
          >
             <Paper elevation={2} square border='1 px dashed grey ' style={{maxHeight: 1390, overflow: 'auto',width:"100%"}}>
        <Typography variant="h3">
     Expand your career opportunities with Python
        </Typography>
        <Typography variant="h7" components="p">
     Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to
                    </Typography>
                   
                    <Grid container align="center" direction="column">
                        <Grid item sm={2} >
                             <Button variant="outlined" style={{
                        marginTop: '35px',
                                height: '40px',
                            marginLeft: '-1200px',
                        width:"130px"
                    }} color="secondary">Explore Python</Button>
                         </Grid>
                        <Grid item sm={10} >
                            <Stack align="center" direction="row" spacing={4} style={cardStyle}>   
                                <MediaCard></MediaCard>
      <MediaCard></MediaCard>
      <MediaCard></MediaCard>
      <MediaCard></MediaCard>      
</Stack>
    </Grid>
</Grid>
      </Paper>
      </Box>

               <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: "90%",
          height: '590px',
          marginLeft: '80px',
          marginTop: '35px'
        },
            }}      
          >
             <Paper elevation={2} square border='1 px dashed grey ' style={{maxHeight: 1390, overflow: 'auto'}}>
<Typography variant="h4">Students Are Viewing</Typography>
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
      </Paper>
      </Box>
            <ListCard></ListCard>
            <ProfileCard></ProfileCard>
             <BusinessCard></BusinessCard>
            <FindOutCard></FindOutCard> 
</>
    );
}
export default content