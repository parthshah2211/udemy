import React from 'react';

import PropTypes from 'prop-types'; // ES6
import './App.css';
import Form from './component/form/form';
import Layout from './component/layout/layout';
import { AppBar, Toolbar, Typography } from '@mui/material';
// import ContentCard from './component/card/card';
import Content from './component/content/content.jsx'
import Footer from './component/footer/footer';
// import Hook from './component/layout/leftMenue/leftMenu';
// import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme'; 
import { useTheme } from '@emotion/react';

import { ThemeProvider } from '@mui/material/styles';
function App() {   
  console.log(theme);
  return (
      <>
  
  <ThemeProvider theme={theme}>
        <div>     
          
          <Button>sa</Button>
          <Header></Header>
    
          <Layout></Layout> 
 <Content></Content>
        <Footer color="primary"></Footer> 
  
    </div>
 </ThemeProvider>
  </>
  );
}

export default App;

// import React from 'react';
import { Button } from '@mui/material';
import Header from './component/layout/header/header';
// import { Button } from '@material-ui/core';


// const App = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <Button variant="contained" color="secondary">
//         Secondary
//       </Button>
//     </ThemeProvider>
//   );
// }

// export default App;