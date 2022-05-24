  
import React, { useState } from "react";
import {
  AppBar,
  Button,
  IconButton,
  InputBase,
  Tab,
  Tabs,
  Toolbar,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { theme } from "../../../theme";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./draweComp";
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingCartCheckout } from "@mui/icons-material";
import LanguageIcon from '@mui/icons-material/Language';

const Header = () => {
  
  const isMatch = useMediaQuery(theme.breakpoints.down("xl"));
  console.log(isMatch);
  return (
      <React.Fragment>         
      <AppBar >
        <Toolbar>
          {isMatch ? (
                      <>
                            <DrawerComp />
                           <img src="https://cdn2.downdetector.com/static/uploads/logo/UDEMY_3_0KKraw2.png" style={{ 
                       height:'75px', width:'100px',marginLeft:'75px',marginTop:'10px',align:"center", direction:"row"
                   }}></img> 
            
            </>
          ) : (
                          <>
                              <img src="https://cdn2.downdetector.com/static/uploads/logo/UDEMY_3_0KKraw2.png" style={{ 
                       height:'75px', width:'100px',marginLeft:'55px',marginTop:'10px'
                   }}></img>           
                <Tabs
                  variant="hedderTab"               
                indicatorColor="secondary"
                textColor="inherit"
              >
                                  <Tab label="categories" />
                                  </Tabs>
                                       <InputBase placeholder="Serch for Anything"
                    variant="outlined"
                    startAdornment={<SearchIcon> 
                    </SearchIcon>}
                                  ></InputBase>
                              <Tabs   variant="hedderTab"
                indicatorColor=""
                textColor="secondary"
                // value={value}
                // onChange={(e, value) => setValue(value)}
 >
                <Tab label="udemyBusiness" />
                <Tab label="Tech On Udemy" />
                              </Tabs>
                              <Stack direction="row" spacing={2} variant="hedder">
                                  <IconButton >
                        <ShoppingCartCheckout></ShoppingCartCheckout>
                              </IconButton>         
                    <Button variant="outlined" color="secondary" >Log In</Button>
                              <Button variant="outlined" color="primary" style={{ backgroundColor: "black" }}>Sign Up</Button>
 <IconButton style={{backgroundColor:'white'}}>
 <LanguageIcon></LanguageIcon>
</IconButton>
                              </Stack>
                              
              {/* <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button> */}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;