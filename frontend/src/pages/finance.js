import React from 'react'
import { useRef, useState } from "react";
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
import img2 from "../images/financehome.svg"
import "./task.css";
import { UilNotes } from '@iconscout/react-unicons'
import { UilEdit } from '@iconscout/react-unicons'
import { UilRepeat } from '@iconscout/react-unicons'
import { UilGraphBar } from '@iconscout/react-unicons'
import { UilMoneyWithdrawal } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from "react-redux";
import {logout, selectUser} from "../features/userSlice"
import {Link} from 'react-router-dom';


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";




const pages = [];
const settings = ['My Profile', 'Dashboard', 'Logout'];

const Finance = () => {

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
            <img src={img1} style={{height:'46px', marginTop:'3px', paddingTop:'1px'}}/>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img src={img1} style={{height:'46px', marginTop:'3px', paddingTop:'1px'}}/>
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
          <img src={img2} className='trackerimage'/>
        </div>
        <div className='about__a-right'>
          <h1>Financial Buddy</h1>
          <p>We help you manage your finances and achieve your financial goals by providing expert advice on a range of financial topics such as budgeting, saving, investing, retirement planning, tax planning, and estate planning. You can utilize our tools like SIP Calculator, EMI Calculaor. You can reach out to us on email for personal advice.</p>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
          <div className='passwordcards'>
          <SwiperSlide>
            <Link to="/instruments" style={{ textDecoration: 'none' }}>
            <article className='a__card'>
              <span className='a__icon a__icon1'>
                <UilGraphBar className='imp'/>
              </span>
              <h3>Financial</h3>
              <p>Instruments</p>
            </article>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/investment" style={{ textDecoration: 'none' }}>
            <article className='a__card'>
              <span className='a__icon a__icon2'>
                <UilNotes className='imp'/>
              </span>
              <h3>Investment</h3>
              <p>Details</p>
            </article>
            </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link to="/editor" style={{ textDecoration: 'none' }}>
            <article className='a__card'>
              <span className='a__icon a__icon3'>
                <UilEdit className='imp'/>
              </span>
              <h3>Editor's</h3>
              <p>Choice</p>
            </article>
            </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link to="/interest" style={{ textDecoration: 'none' }}>
            <article className='a__card'>
              <span className='a__icon a__icon4'>
                <UilRepeat className='imp'/>
              </span>
              <h3>SIP</h3>
              <p>Calculator</p>
            </article>
            </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link to="/loan" style={{ textDecoration: 'none' }}>
            <article className='a__card'>
              <span className='a__icon a__icon5'>
                <UilMoneyWithdrawal className='imp'/>
              </span>
              <h3>EMI/Loan</h3>
              <p>Calculator</p>
            </article>
            </Link>
            </SwiperSlide>
          </div>
          </Swiper>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Finance