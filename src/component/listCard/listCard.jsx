import { Box, Grid, Stack, Typography } from "@mui/material";

const ListCard=()=>{
const typographyStyle={
    marginTop:'45px',
    marginLeft:'95px'
}
const listStyle={
    marginTop:'35px',
    marginLeft:'95px'
}
const columnStyle={
    marginTop:'35px',
    marginLeft:'5px'
}
return(
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 1,
        height:'500px',
        width:'auto',
        m: 1,
        bgcolor: '#f7f9fa',
        borderRadius: 1,
      }}>
           <Typography variant="h4"  style={typographyStyle}>
           Featured topics by category
</Typography>


<Grid container align="center" direction="row">
    <Grid item sm={3} >
    <Stack align="center" direction="column"  spacing={3} style={listStyle}>
    <Typography variant="h6"  >
    Development
    </Typography>
    <Typography variant="h8" color="purple" >
    Python
    </Typography>
    <Typography variant="h11"  >
    34,887,515 students
    </Typography>
    <Typography variant="h8" color="purple" >
    Web Development
    </Typography>
    <Typography variant="h11"  >
    34,887,515 students
    </Typography>
    <Typography variant="h8" color="purple" >
    Machine Learning
    </Typography>
    <Typography variant="h11"  >
    34,887,515 students
    </Typography>


    </Stack>
    </Grid>
    <Grid item sm={3} >
    <Stack align="center" direction="column"  spacing={3} style={listStyle}>
    <Typography variant="h6"  >
    Business
    </Typography>
    <Typography variant="h8" color="purple" >
    Financial Analysis
    </Typography>
    <Typography variant="h11"  >
    34,887,515 students
    </Typography>
    <Typography variant="h8" color="purple" >
    SQL
    </Typography>
    <Typography variant="h11"  >
    34,887,515 students
    </Typography>
    <Typography variant="h8" color="purple" >
      PMP
    </Typography>
    <Typography variant="h11"  >
    34,887,515 students
    </Typography>
    </Stack>
    </Grid>

    <Grid item sm={3} >
    <Stack align="center" direction="column"  spacing={3} style={listStyle}>
    <Typography variant="h6"  >
    IT and Software
    </Typography>
    <Typography variant="h8" color="purple" >
    AWS
    </Typography>
    <Typography variant="h11"  >
    34,887,515 students
    </Typography>
    <Typography variant="h8" color="purple" >
    EITHICAL HACKING
    </Typography>
    <Typography variant="h11"  >
    34,887,515 students
    </Typography>
    <Typography variant="h8" color="purple" >
      CYBER_SECURITY
    </Typography>
    <Typography variant="h11"  >
    34,887,515 students
    </Typography>
    </Stack>
    </Grid>


    <Grid item sm={3} >
    <Stack align="center" direction="column"  spacing={3} style={listStyle}>
    <Typography variant="h6"  >
    Design
    </Typography>
    <Typography variant="h8" color="purple" >
      PhotoShop
    </Typography>
    <Typography variant="h11"  >
    34,887,515 students
    </Typography>
    <Typography variant="h8" color="purple" >
    Graphics Design
    </Typography>
    <Typography variant="h11"  >
    34,887,515 students
    </Typography>
    <Typography variant="h8" color="purple" >
      Drawing
    </Typography>
    <Typography variant="h11"  >
    34,887,515 students
    </Typography>
    </Stack>
    </Grid>

       </Grid>
     </Box>
)
}
export default ListCard;