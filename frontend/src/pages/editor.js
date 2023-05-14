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
import Tooltip1 from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';


import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';

import "./editor.css"

import { Typography } from '@mui/material';
import { useHistory } from 'react-router';
import img1 from "../images/logo.svg";
import img2 from "../images/award.png";

import { useDispatch, useSelector } from "react-redux";
import {logout, selectUser} from "../features/userSlice"


import { ThemeProvider, createTheme } from '@mui/material/styles';

import { UilGraphBar } from '@iconscout/react-unicons'

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));


const theme = createTheme({
  palette: {
    secondary: {
      main: '#FFFF00',
    },
    info: {
      main: '#66bb6a',
    },
  },
});





const pages = [];
const settings = ['My Profile', 'Dashboard', 'Logout'];



const Editor = () => {

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





    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };




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
            <Tooltip1 title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar style={{backgroundColor:"#1976D2", color:"#F1FAEE", fontFamily:"Raleway", fontWeight:"800"}}>{acronym}</Avatar>
              </IconButton>
            </Tooltip1>
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
    <div style={{padding:"25px 60px"}}>
      <p style={{padding:"2px 2px 0 2px", fontWeight:"800", fontSize:"40px" }}>Editor's Choice <span><img src={img2}/></span></p>
      <p style={{padding:"0px 0px 2px 7px", fontWeight:"500", fontSize:"18px" }}>Access category-specific list of mutual funds, curated by our in-house Editors.</p>
    <Accordion style={{padding:"20px"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <span className="myicon myicon1">
          <UilGraphBar/>
          </span>
          <Typography className='myhead'>Mutual Funds by Market Capitalization: Large Cap</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
    <ThemeProvider theme={theme}>
    <TableContainer>
      <Table>
        <TableHead style={{backgroundColor: "#dbd8d8"}}>
          <TableRow>
            <TableCell style={{fontWeight:"700", width: '40%'}}>Fund Name</TableCell>
            <TableCell style={{fontWeight:"700", width:'15%'}} >Fund Size</TableCell>
            <TableCell style={{fontWeight:"700", width:'10%'}}>1Y Return</TableCell>
            <TableCell style={{fontWeight:"700", width:'10%'}}>3Y Return</TableCell>
            <TableCell style={{fontWeight:"700", width:'10%'}}>5Y Return</TableCell>
            <TableCell style={{fontWeight:"700", width:'15%'}}>Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell style={{width:'40%'}}>Nippon India Large Cap Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 12,737 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>11.67%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>20.01%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>15.98%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly /></TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'40%'}}>ICICI Prudential Bluechip Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 34,679 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>9.2%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>16.28%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>14.92%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly /></TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'40%'}}>Canara Robeco Bluechip Equity Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 8,860 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>7.2%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>12.78%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>14.78%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly /></TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'40%'}}>HDFC Top 100 Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 22,294 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>12.0%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>18.14%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>14.75%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly /></TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'40%'}}>Kotak Bluechip Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 5,376 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>7.46%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>14.22%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>14.51%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{padding:"20px"}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        <span className="myicon myicon2">
          <UilGraphBar/>
        </span>
        <Typography className='myhead'>Mutual Funds by Market Capitalization: Mid Cap</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ThemeProvider theme={theme}>
    <TableContainer >
      <Table>
        <TableHead style={{backgroundColor: "#dbd8d8"}}>
          <TableRow>
            <TableCell style={{fontWeight:"700", width: '40%'}}>Fund Name</TableCell>
            <TableCell style={{fontWeight:"700", width:'15%'}} >Fund Size</TableCell>
            <TableCell style={{fontWeight:"700", width:'10%'}}>1Y Return</TableCell>
            <TableCell style={{fontWeight:"700", width:'10%'}}>3Y Return</TableCell>
            <TableCell style={{fontWeight:"700", width:'10%'}}>5Y Return</TableCell>
            <TableCell style={{fontWeight:"700", width:'15%'}}>Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell style={{width:'40%'}}>Quant Mid Cap Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 1,165 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+5.78%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+27.17%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+26.19%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly /></TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'40%'}}>PGIM India Midcap Opportunities Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 7,812 CR</TableCell>
              <TableCell style={{width:'10%', color:'red'}}>-0.66%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+21.61%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+24.32%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly /></TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'40%'}}>Motilal Oswal Midcap Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 3,801 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+8.49%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+26.78%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+21.88%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly /></TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'40%'}}>SBI Magnum Midcap Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 8,734 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+7.91%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+23.52%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+21.37%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly /></TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'40%'}}>Kotak Emerging Equity Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 24,407 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+6.47%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+20.97%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+20.12%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly /></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{padding:"20px"}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <span className="myicon myicon3">
          <UilGraphBar/>
        </span>
        <Typography className='myhead'>Mutual Funds by Market Capitalization: Small Cap</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ThemeProvider theme={theme}>
    <TableContainer >
      <Table>
        <TableHead style={{backgroundColor: "#dbd8d8"}}>
          <TableRow>
            <TableCell style={{fontWeight:"700", width: '40%'}}>Fund Name</TableCell>
            <TableCell style={{fontWeight:"700", width:'15%'}} >Fund Size</TableCell>
            <TableCell style={{fontWeight:"700", width:'10%'}}>1Y Return</TableCell>
            <TableCell style={{fontWeight:"700", width:'10%'}}>3Y Return</TableCell>
            <TableCell style={{fontWeight:"700", width:'10%'}}>5Y Return</TableCell>
            <TableCell style={{fontWeight:"700", width:'15%'}}>Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell style={{width:'40%'}}>Quant Small Cap Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 3,579 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+15.27%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+37.9%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+34.51%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly /></TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'40%'}}>Nippon India Smallcap Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 24,491 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+12.97%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+30.09%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+26.29%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly /></TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'40%'}}>Kotak Smallcap Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 8,672 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+1.83%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+24.34%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+24.04%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly /></TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'40%'}}>ICICI Prudential Smallcap Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 4,762 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+7.17%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+27.16%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+23.85%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly /></TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'40%'}}>Axis Small Cap Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 11,601 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+7.18%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+23.43%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+23.58%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly /></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{padding:"20px"}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
        <span className="myicon myicon4">
          <UilGraphBar/>
        </span>
        <Typography className='myhead'>Mutual Funds by Diversification: Multi Cap</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ThemeProvider theme={theme}>
    <TableContainer >
      <Table>
        <TableHead style={{backgroundColor: "#dbd8d8"}}>
          <TableRow>
            <TableCell style={{fontWeight:"700", width: '40%'}}>Fund Name</TableCell>
            <TableCell style={{fontWeight:"700", width:'15%'}} >Fund Size</TableCell>
            <TableCell style={{fontWeight:"700", width:'10%'}}>1Y Return</TableCell>
            <TableCell style={{fontWeight:"700", width:'10%'}}>3Y Return</TableCell>
            <TableCell style={{fontWeight:"700", width:'10%'}}>5Y Return</TableCell>
            <TableCell style={{fontWeight:"700", width:'15%'}}>Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell style={{width:'40%'}}>Quant Active Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 3,688 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+1.13%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+23%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+24.63%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /></TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'40%'}}>Nippon India Multi Cap Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 14,342 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+12.32%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+25.39%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+18.89%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly /></TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'40%'}}>Sundaram Multi Cap Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 1,785 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+2.14%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+15.88%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+14.98%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly /></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{padding:"20px"}} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
        <span className="myicon myicon5">
          <UilGraphBar/>
        </span>
        <Typography className='myhead'>Mutual Funds by Diversification: Flexi Cap</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ThemeProvider theme={theme}>
    <TableContainer >
      <Table>
        <TableHead style={{backgroundColor: "#dbd8d8"}}>
          <TableRow>
            <TableCell style={{fontWeight:"700", width: '40%'}}>Fund Name</TableCell>
            <TableCell style={{fontWeight:"700", width:'15%'}} >Fund Size</TableCell>
            <TableCell style={{fontWeight:"700", width:'10%'}}>1Y Return</TableCell>
            <TableCell style={{fontWeight:"700", width:'10%'}}>3Y Return</TableCell>
            <TableCell style={{fontWeight:"700", width:'10%'}}>5Y Return</TableCell>
            <TableCell style={{fontWeight:"700", width:'15%'}}>Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell style={{width:'40%'}}>Quant Flexi Cap Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 1,162 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+1.13%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+24.77%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+25.18%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /></TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'40%'}}>Parag Parikh Flexi Cap Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 31,290 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+12.32%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+17.69%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+19.7%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly /></TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'40%'}}>HDFC Flexi Cap Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 31,893 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+2.14%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+23.55%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+18.54%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /></TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'40%'}}>PGIM India Flexi Cap Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 5,310 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+2.14%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+14.47%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+17.91%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly /></TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'40%'}}>Franklin India Flexi Cap Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 10,028 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+2.14%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+17.47%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+15.84%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly /></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{padding:"20px"}} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
        <span className="myicon myicon6">
          <UilGraphBar/>
        </span>
        <Typography className='myhead'>Mutual Funds by Diversification: Focused Funds</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ThemeProvider theme={theme}>
    <TableContainer >
      <Table>
        <TableHead style={{backgroundColor: "#dbd8d8"}}>
          <TableRow>
            <TableCell style={{fontWeight:"700", width: '40%'}}>Fund Name</TableCell>
            <TableCell style={{fontWeight:"700", width:'15%'}} >Fund Size</TableCell>
            <TableCell style={{fontWeight:"700", width:'10%'}}>1Y Return</TableCell>
            <TableCell style={{fontWeight:"700", width:'10%'}}>3Y Return</TableCell>
            <TableCell style={{fontWeight:"700", width:'10%'}}>5Y Return</TableCell>
            <TableCell style={{fontWeight:"700", width:'15%'}}>Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell style={{width:'40%'}}>HDFC Focused 30 Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 3,988 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+15.98%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+26.24%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+19.49%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly /></TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'40%'}}>Quant Focused Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 238 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+3.34%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+17.69%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+17.31%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly /></TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'40%'}}>ICICI Prudential Focused Equity Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 4,033 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+9.37%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+17.49%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+16.86%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{padding:"20px"}} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
        <span className="myicon myicon7">
          <UilGraphBar/>
        </span>
        <Typography className='myhead'>Mutual Funds by Themes: Thematic Divident Yeild</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ThemeProvider theme={theme}>
    <TableContainer >
      <Table>
        <TableHead style={{backgroundColor: "#dbd8d8"}}>
          <TableRow>
            <TableCell style={{fontWeight:"700", width: '40%'}}>Fund Name</TableCell>
            <TableCell style={{fontWeight:"700", width:'15%'}} >Fund Size</TableCell>
            <TableCell style={{fontWeight:"700", width:'10%'}}>1Y Return</TableCell>
            <TableCell style={{fontWeight:"700", width:'10%'}}>3Y Return</TableCell>
            <TableCell style={{fontWeight:"700", width:'10%'}}>5Y Return</TableCell>
            <TableCell style={{fontWeight:"700", width:'15%'}}>Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell style={{width:'40%'}}>Templeton India Equity Income Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 1,390 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+12.32%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+23.25%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+20.27%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly /></TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'40%'}}>ICICI Prudential Divident Yield Equity Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 1,303 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+15.38%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+25.7%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+19.96%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly /></TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'40%'}}>Aditya Birla Sun Life Divident Yield Fund</TableCell>
              <TableCell style={{width:'15%'}}>Rs. 856 CR</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+13.96%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+18.6%</TableCell>
              <TableCell style={{width:'10%', color:'green'}}>+16.15%</TableCell>
              <TableCell style={{width:'15%'}}><Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly /></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>

    </>
  )
}

export default Editor