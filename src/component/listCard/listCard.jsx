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
    <Grid item sm={12} >
    <Stack align="center" direction="row"  spacing={8} style={listStyle}>
    <Typography variant="h6"  >
    Development
    </Typography>
    <Typography variant="h6">
    Business
    </Typography>
    <Typography variant="h6">
    IT and Software
    </Typography>
    <Typography variant="h6">
    Design
    </Typography>
    </Stack>
    </Grid>
    </Grid>
    
<Grid container align="center" direction="column">
    <Grid item sm={12}>
    <Stack align="center" direction="column"  spacing={4} style={columnStyle}>
    <Typography variant="h6"  >
    Development
    </Typography>
    <Typography variant="h6">
    Business
    </Typography>
    <Typography variant="h6">
    IT and Software
    </Typography>
    <Typography variant="h6">
    Design
    </Typography>
    </Stack>
    </Grid>
    </Grid>
    </Box>
)
}
export default ListCard;