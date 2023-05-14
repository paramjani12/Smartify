import React from 'react'
import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import { useHistory } from 'react-router';
import img1 from "../images/logo.svg";
import img2 from "../images/taskhome.svg"
import "./task.css";
import { UilUser } from '@iconscout/react-unicons'
import { UilBag } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from "react-redux";
import {logout, selectUser} from "../features/userSlice"

import {Link} from 'react-router-dom';



const pages = [];
const settings = ['My Profile', 'Dashboard', 'Logout'];

const Task = () => {

const dispatch = useDispatch()
const history = useHistory();



const [anchorElNav, setAnchorElNav] = React.useState(null);
const [anchorElUser, setAnchorElUser] = React.useState(null);

const handleOpenNavMenu = (event) => {
  setAnchorElNav(event.currentTarget);
};
const handleOpenUserMenu = (event) => {
  setAnchorElUser(event.currentTarget);
};

const handleCloseNavMenu = () => {
  setAnchorElNav(null);
};

const handleCloseUserMenu = () => {
  setAnchorElUser(null);
};

const user = useSelector(selectUser);
const str = user.userName;
let acronym = str.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')

const handleLogout = async (e) =>{
  e.preventDefault();
  await fetch("http://127.0.0.1:5555/api/v1/users/logout",{
      method:"POST",
      withCredentials: true,
      headers:{
          "Content-Type":"application/json"
      },
  });

  // ctx.logout()
  dispatch(logout());
  history.push('/');

}



  return (
    <>
    <AppBar position="static" style={{backgroundColor:"#1D3557" , color:"#F1FAEE"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img src={img1} style={{height:'46px', marginTop:'3px', paddingTop:'1px'}} />
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img src={img1} style={{height:'46px', marginTop:'3px', paddingTop:'1px'}} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar style={{backgroundColor:"#1976D2", color:"#F1FAEE", fontFamily:"Raleway", fontWeight:"800"}}>{acronym}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
                <MenuItem key={settings[0]}>
                  <Typography textAlign="center">{settings[0]}</Typography>
                </MenuItem>
                <MenuItem key={settings[1]}>
                <Typography textAlign="center">{settings[1]}</Typography>
              </MenuItem>
              <MenuItem key={settings[2]} onClick={handleLogout}>
                  <Typography textAlign="center">{settings[2]}</Typography>
                </MenuItem>
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <hr style={{border: "1px solid var(--white)", padding: 0, margin: 0,boxSizing: "border-box"}}/>
    <section className='about__a'>
      <div className='container about__a-container'>
        <div className='about__a-left'>
          <img src={img2} className='image'/>
        </div>
        <div className='about__a-right'>
          <h1>Task Manager</h1>
          <p>We helps you organize and manage your tasks and to-do lists. It allows you to create, view, edit, and prioritize tasks, set reminders and deadlines, and track individual progress. We provide a user-friendly interface where you can input tasks and relevant information such as due dates, priority levels, and notes.</p>
          <div className='a__cards'>
            <Link to="/professional" style={{ textDecoration: 'none' }}>
            <article className='a__card '>
              <span className='a__icon a__icon1'>
                <UilBag className='imp'/>
              </span>
              <h3>Professional</h3>
              <p>Task</p>
            </article>
            </Link>
            <Link to="/personal" style={{ textDecoration: 'none' }}>
            <article className='a__card'>
              <span className='a__icon a__icon2'>
                <UilUser className='imp'/>
              </span>
              <h3>Personal</h3>
              <p>Task</p>
            </article>
            </Link>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Task