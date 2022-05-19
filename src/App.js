import React from 'react';
// import logo from './logo.svg';
import PropTypes from 'prop-types'; // ES6
// import { Counter } from '../src/redux/features/counter/Counter';
import './App.css';
import Form from './component/form/form';
import LeftMenu from './component/layout/leftMenue/leftMenu';
import Layout from './component/layout/layout';
import { AppBar, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ContentCard from './component/card/card';
import Content from './component/content/content.jsx'


function App(email,password) {   
const useStyles =makeStyles({
  appMain:{
    paddingLeft:'320PX',
    width:'100%t'
  }
})

  return (
    <>
    <div className={useStyles.appMain}>     
    {/* <LeftMenu></LeftMenu>  */}
 <Layout></Layout> 
 <Content></Content>
    </div>

  </>
  );
}

export default App;
