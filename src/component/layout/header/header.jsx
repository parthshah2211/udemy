import LanguageIcon from '@mui/icons-material/Language';
import { AppBar, Grid, IconButton, Toolbar,Badge, Box, Button, Stack, Typography, InputBase } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { border, fontSize } from '@mui/system';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Image, LoginRounded } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { useStyles } from './headerStyle';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
const Header =()=>{
   const appBarStyle={
        backgroundColor:'white',
    }
    const stackStyle={
        marginLeft:'auto',
        marginTop:'5px',
    }
    const serchBoxStyle={
        opacity: '0.6',
                            padding: '0px 8px' ,
                            borderRadius: '50%' ,
                            borderColor: 'primary.black',

    }
    const typographyStyle={
        marginTop:'5px'
    }
    return (
        <>
            <AppBar position="static"  style={appBarStyle}>
            <Toolbar>
                <Grid container align="center">
                    <Grid item sm={7} >              
                    <Stack spacing={2} direction="row" style={stackStyle}>
                    <image src="/staticx/udemy/images/v7/logo-udemy.svg"
                    style={{ 
                        height: '20px',
                        width: '20px'
                    }} 
                    ></image>
                    <Typography color="common.black" >Categories</Typography>
                    <InputBase placeholder="Serch"
                    style={serchBoxStyle}
                    startAdornment={<SearchIcon> 
                    </SearchIcon>}
                    ></InputBase>
                    </Stack>
                    </Grid>
                    <Grid item sm={5}>
                    <Stack spacing={2} direction="row" style={{marginLeft:'auto'}}>
                    <Typography color="common.black" style={typographyStyle}>udemy Business</Typography>
                    <Typography color="common.black" style={typographyStyle}>Tech On Udemy</Typography>
                    <IconButton >
                        <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon>
                    </IconButton>
                    <Button variant="outlined">Log In</Button>
                    <Button variant="outlined" style={{backgroundColor:'black'}}>Sign Up</Button>
 <IconButton style={{backgroundColor:'white'}}>
 <LanguageIcon></LanguageIcon>
</IconButton>
</Stack>
                        </Grid>
                </Grid>
            </Toolbar>
            </AppBar>
        </>
    )
}
export  default Header;