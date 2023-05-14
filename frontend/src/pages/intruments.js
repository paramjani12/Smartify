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

import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';


import { Typography } from '@mui/material';
import { useHistory } from 'react-router';
import img1 from "../images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import {logout, selectUser} from "../features/userSlice"


import { ThemeProvider, createTheme } from '@mui/material/styles';

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

const Instruments = () => {

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
    <ThemeProvider theme={theme}>
    <TableContainer component={Paper}>
      <Table>
        <TableHead style={{backgroundColor: "#dbd8d8"}}>
          <TableRow>
            <TableCell style={{fontWeight:"700", width: '20%'}}>Financial Instrument</TableCell>
            <TableCell style={{fontWeight:"700", width:'10%'}} >5Y return <br/>(Abs. Return)</TableCell>
            <TableCell style={{fontWeight:"700", width:'10%'}}>1Y return <br/>(Ann. Return)</TableCell>
            <TableCell style={{fontWeight:"700", width:'20%'}}>Riskometer</TableCell>
            <TableCell style={{fontWeight:"700", width:'20%'}}>Goal</TableCell>
            <TableCell style={{fontWeight:"700", width:'20%'}}>Graph</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell style={{width:'20%'}}>Equities<br/>Stock Market</TableCell>
              <TableCell style={{width:'10%'}}>70.10%</TableCell>
              <TableCell style={{width:'10%'}}>2.26%</TableCell>
              <TableCell style={{width:'20%'}}><Chip label="High" color='error'/></TableCell>
              <TableCell style={{width:'20%'}}>Long Term<br/>High return High risk</TableCell>

              <TableCell style={{width:'20%'}}>
                <Sparklines data={[5021.5,5903.799805,5765.450195,6136.75,5140.600098,5222.799805,4735.649902,5265.299805,4869.25,4039.75,4331.600098,4356.100098,3921.850098,2885.399902,2755.149902,2963.300049,2872.350098,2764.600098,3023.850098,3478.699951,4450.399902,4292.299805,4633.799805,4662.200195,5087.200195,4712.25,5039.700195,5200.899902,4882.049805,4935.600098,5249.200195,5278.399902,5086.25,5312.049805,5369.549805,5403.049805,6030.299805,6092.299805,5871,6177.450195,5537.299805,5382,5835,5766.899902,5561.049805,5705.75,5527.5,5109.799805,4874.399902,5278.600098,4970.850098,4675.799805,5198.149902,5366,5296.350098,5254.299805,4910.850098,5283.850098,5220.700195,5276.5,5704.75,5609.850098,5878.25,5982.600098,6040.950195,5702.450195,5697.350098,5911.399902,5997.350098,5834.100098,5776.899902,5480.25,5756.100098,6289.75,6171.149902,6301.25,6058.799805,6264.350098,6729.5,6709.950195,7264.049805,7629,7662.5,7990.350098,7960.5,8348.150391,8605.099609,8288.700195,8802.5,8953.849609,8483.700195,8230.049805,8417.25,8376.25,8510.650391,7907.950195,7992.049805,8054.549805,7958.149902,7924.549805,7589.5,7038.25,7718.049805,7822.700195,8179.200195,8313.049805,8654.299805,8793.599609,8666.150391,8653.150391,8244,8210.099609,8570.349609,8904.400391,9220.599609,9339.849609,9603.549805,9587.950195,10101.049805,9937.650391,9893.299805,10390.349609,10263.700195,10477.549805,11044.549805,10479.950195,10151.650391,10783.849609,10738.450195,10732.349609,11359.799805,11751.799805,10930.900391,10441.700195,10930.700195,10868.849609,10851.349609,10842.650391,11665.200195,11725.549805,11953.75,11839.900391,11060.200195,10960.950195,11515.400391,11886.599609,12137.049805,12202.150391,11627.450195,11387.349609,8584.099609,9533.5,9726.849609,10323.799805,11057.549805,11464.299805,11364.450195,11697.349609,13062.200195,13996.099609,13758.599609,14702.5,14798.400391,14481.049805,15629.650391,15755.049805,15874.900391,17185.599609,17531.900391,17783.150391,17104.400391,17387.150391,17529.449219,16593.099609,17436.900391,16924.449219,16594.400391,15703.700195,17243.199219,17485.699219,17102.099609,18130.699219,18871.949219,18131.699219,17811.599609,17360.099609,17427.949219]}>
                  <SparklinesLine color="#253e56" />
                </Sparklines>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'20%'}}>Mutual Funds<br/>SIP</TableCell>
              <TableCell style={{width:'10%'}}>35.45%</TableCell>
              <TableCell style={{width:'10%'}}>10.25%</TableCell>
              <TableCell style={{width:'20%'}}><Chip label="Moderately High" color='warning'/></TableCell>
              <TableCell style={{width:'20%'}}>Long Term<br/>Assured returns but timing is important</TableCell>

              <TableCell style={{width:'20%'}}>
                <Sparklines data={[1.63, 1.47, 1.52, 7.19, 1.27, 11.21, 51.20, 194.20, 102.64, 245.16, 212.14]}>
                  <SparklinesLine color="#253e56" />
                </Sparklines>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'20%'}}>Bullion Gold</TableCell>
              <TableCell style={{width:'10%'}}>69.83%</TableCell>
              <TableCell style={{width:'10%'}}>13.04%</TableCell>
              <TableCell style={{width:'20%'}}><Chip label="Moderately Low" color='info'/></TableCell>
              <TableCell style={{width:'20%'}}>Long Term store of value<br/>Most secure investment</TableCell>

              <TableCell style={{width:'20%'}}>
                <Sparklines data={[63.25, 71.75, 83.75, 102.50, 162.00, 176.00, 184.00, 193.00, 202.00, 278.50 ,506.00, 540.00, 432.00, 486.00, 685.00, 937.00, 1330.00, 1800.00, 1645.00, 1800.00, 1970.00, 2130.00, 2140.00, 2570.00, 3130.00, 3140.00, 3200.00, 3466.00, 4334.00, 4140.00, 4598.00, 4680.00, 5160.00, 4725.00, 4045.00, 4234.00, 4400.00, 4300.00, 4990.00, 5600.00, 5850.00, 7000.00, 10800.00, 12500.00, 14500.00, 18500.00, 26400.00, 31050.00, 29600.00, 28006.50, 26343.50, 28623.50, 29667.50, 31438.00, 35220.00, 48651.00, 48720.00, 52670.00, 62820.00]}>
                  <SparklinesLine color="#253e56" />
                </Sparklines>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'20%'}}>Sovereign Gold Bond</TableCell>
              <TableCell style={{width:'10%'}}>68.12%</TableCell>
              <TableCell style={{width:'10%'}}>11.05%</TableCell>
              <TableCell style={{width:'20%'}}><Chip label="Low" color='success'/></TableCell>
              <TableCell style={{width:'20%'}}>Long Term<br/>Liquidity after 5Y</TableCell>

              <TableCell style={{width:'20%'}}>
                <Sparklines data={[2916, 2600, 2684, 2943, 3007, 3150, 3119, 2881, 2866, 2890, 2952, 2961, 2964, 2961, 2934, 2945, 2971, 2987, 2956, 2830, 2951, 3114, 3146, 3183, 3119, 3214, 3326, 3196, 3443, 3499, 3890, 3788, 3835, 3795, 4016, 4070, 4260, 4639, 4590, 4677, 4852, 5334, 5117,  5051,  5177, 5000, 5104, 4912, 4662, 4777, 4842, 4889, 4807, 4790, 4732, 4765, 4791, 4786, 5109, 5091, 5197, 5409, 5611]}>
                  <SparklinesLine color="#253e56" />
                </Sparklines>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'20%'}}>Gold ETFs <br/> Gold Mutual funds</TableCell>
              <TableCell style={{width:'10%'}}>83.91%</TableCell>
              <TableCell style={{width:'10%'}}>12.74%</TableCell>
              <TableCell style={{width:'20%'}}><Chip label="Moderate" color='secondary'/></TableCell>
              <TableCell style={{width:'20%'}}>Long Term<br/>High Liquidity and Inflation proof</TableCell>

              <TableCell style={{width:'20%'}}>
                <Sparklines data={[10,10.14,9.88,9.87,9.76,10.04,11,11.12,10.67,12.45,12.97,11.45,12.34,12.56,12.67,12.99,14.56,15.65,14.54,14.56,14.78,14.56,15.78,15.67,15.89,16.78,16.65, 17.01,17.5,17.89,17.65,17.56,17.9,18.1,18.34,18.56]}>
                  <SparklinesLine color="#253e56" />
                </Sparklines>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'20%'}}>Bullion Silver</TableCell>
              <TableCell style={{width:'10%'}}>88.76%</TableCell>
              <TableCell style={{width:'10%'}}>38.82%</TableCell>
              <TableCell style={{width:'20%'}}><Chip label="Moderately Low" color='info'/></TableCell>
              <TableCell style={{width:'20%'}}>Long Term<br/>Inflation proof</TableCell>

              <TableCell style={{width:'20%'}}>
                <Sparklines data={[2715,2720, 3105, 3570, 3955, 4015, 4794, 6066, 6755, 6463, 6646, 8040, 5489, 7124, 6335, 7346, 7345, 8560, 7615, 7900, 7215, 7875, 7695, 11770, 10675, 17405, 19520, 23625, 22165, 27255, 56900, 56290, 54030, 43070, 37825, 36990, 37825, 41400, 40600, 63435, 62572, 55100, 76490 ]}>
                  <SparklinesLine color="#253e56" />
                </Sparklines>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'20%'}}>Commodity(GSCI)</TableCell>
              <TableCell style={{width:'10%'}}>23.37%</TableCell>
              <TableCell style={{width:'10%'}}>8.71%</TableCell>
              <TableCell style={{width:'20%'}}><Chip label="High" color='error'/></TableCell>
              <TableCell style={{width:'20%'}}>Inflation Dependent</TableCell>

              <TableCell style={{width:'20%'}}>
                <Sparklines data={[472.85,479.50, 459.15, 473.40, 487.15, 455.40, 415.70, 370.15, 410.35, 425.30, 437.15, 446.35, 410.50, 430.90, 414.75, 404.30, 412.25, 436.75, 385.65, 247.50, 251.00, 305.10, 329.50, 340.75, 362.00, 347.00, 386.20, 412.90, 434.60, 477.00, 470.50, 507.55, 529.00, 547.20, 521.20, 559.00, 591.30, 534.15, 561.75, 622.10, 701.70, 720.10, 800.15, 718.60, 680.75, 652.80, 621.00, 642.00, 622.30, 602.50, 583.00, 596.75]}>
                  <SparklinesLine color="#253e56" />
                </Sparklines>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'20%'}}>Commodity(Crude)</TableCell>
              <TableCell style={{width:'10%'}}>25.29%</TableCell>
              <TableCell style={{width:'10%'}}>6.72%</TableCell>
              <TableCell style={{width:'20%'}}><Chip label="High" color='error'/></TableCell>
              <TableCell style={{width:'20%'}}>Inflation Dependent</TableCell>

              <TableCell style={{width:'20%'}}>
                <Sparklines data={[68.56, 67.07, 68.43, 70.12, 73.29, 64.88, 52.45, 45.80, 54.01, 57.22, 60.24, 63.40, 53.42, 59.27, 57.85, 54.28, 54.15, 61.60, 51.01, 20.10, 19.04, 35.21, 39.84, 40.39, 42.83, 39.90, 45.08, 48.40, 51.99, 61.95, 59.49, 63.64, 66.68, 73.50, 68.55, 75.12, 83.36, 67.01, 75.69, 88.15, 96.09, 101.23, 115.40, 106.01, 98.46, 88.83, 81.02, 86.43, 80.40, 79.06, 76.85, 80.10]}>
                  <SparklinesLine color="#253e56" />
                </Sparklines>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'20%'}}>Fixed Deposits</TableCell>
              <TableCell style={{width:'10%'}}>35%-49%</TableCell>
              <TableCell style={{width:'10%'}}>6%-8%</TableCell>
              <TableCell style={{width:'20%'}}><Chip label="Low" color='success'/></TableCell>
              <TableCell style={{width:'20%'}}>Short Term <br/>Inflation Dependent</TableCell>
              <TableCell style={{width:'20%'}}>
              <Sparklines data={[10,9.5,8,5.5,5.25,5.75,6.25,7.75,7.50,7.75,6.50,8.25,9.00,8.75,8.75,8.50,7.00,6.50,6.25,6.25,5.70,5.25,5.05]}>
                  <SparklinesBars style={{  fill: "#1976D2" }} />
                </Sparklines>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'20%'}}>Post Office Savings Scheme</TableCell>
              <TableCell style={{width:'10%'}}>33%</TableCell>
              <TableCell style={{width:'10%'}}>5.8%</TableCell>
              <TableCell style={{width:'20%'}}><Chip label="Low" color='success'/></TableCell>
              <TableCell style={{width:'20%'}}>Short Term <br/>Minimum Duration: 1Y</TableCell>
              <TableCell style={{width:'20%'}}>
              <Sparklines data={[7.50,8,8.40,8.30,8.40,8.40,7.40,7.40,7.30,7.30,7.20,7.10,7.10,6.90,6.90,6.90,7.30,7.30,7.30,7.20,7.20,7.20,5.80,5.80,5.80,5.80,5.80]}>
                  <SparklinesBars style={{  fill: "#1976D2" }} />
                </Sparklines>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'20%'}}>Public Provident Fund</TableCell>
              <TableCell style={{width:'10%'}}>41%</TableCell>
              <TableCell style={{width:'10%'}}>7.1%</TableCell>
              <TableCell style={{width:'20%'}}><Chip label="Low" color='success'/></TableCell>
              <TableCell style={{width:'20%'}}>Short Term <br/>Tax Saving</TableCell>
              <TableCell style={{width:'20%'}}>
              <Sparklines data={[8.00,8.60,8.8,8.70,8.70,8.70,8.10,8.10,8.00,8.00,7.90,7.80,7.80,7.60,7.60,7.60,8.00,8.00,8.00,7.90,7.90,7.90,7.10,7.10,7.10,7.10,7.10]}>
                  <SparklinesBars style={{  fill: "#1976D2" }} />
                </Sparklines>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell style={{width:'20%'}}>Corporate Bond</TableCell>
              <TableCell style={{width:'10%'}}>44%</TableCell>
              <TableCell style={{width:'10%'}}>7.3%</TableCell>
              <TableCell style={{width:'20%'}}><Chip label="Moderate" color='secondary'/></TableCell>
              <TableCell style={{width:'20%'}}>Long Term <br/>Tax Benefit</TableCell>
              <TableCell style={{width:'20%'}}>
              <Sparklines data={[17.86,17.80,17.65,18.09,18.65,18.78,18.79,18.90,18.79,18.99,19.10,19.20,19.09,19.56,19.78,19.89,20,21.22,21.67,21.2,21.34,22.89,23.23,23.34,23.45,23.67,24,23.95,24.23,24.56,24.78,25.01]}>
                  <SparklinesLine color="#253e56" />
                </Sparklines>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{width:'20%'}}>Government Bond</TableCell>
              <TableCell style={{width:'10%'}}>NA</TableCell>
              <TableCell style={{width:'10%'}}>4.85%</TableCell>
              <TableCell style={{width:'20%'}}><Chip label="Moderately Low" color='info'/></TableCell>
              <TableCell style={{width:'20%'}}>Long Term <br/>Returns - Tax Free & <br/>Depedent on tenure</TableCell>
              <TableCell style={{width:'20%'}}>
                Note: Interest rates are highly depedent on repo rate, RBI policies & inflation
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{width:'20%'}}>Treasury Bills</TableCell>
              <TableCell style={{width:'10%'}}>NA</TableCell>
              <TableCell style={{width:'10%'}}>6%-7.5%</TableCell>
              <TableCell style={{width:'20%'}}><Chip label="Low" color='success'/></TableCell>
              <TableCell style={{width:'20%'}}>Short Term <br/>Returns based upon discount on par value & tenure like 91D, 182D, 364D</TableCell>
              <TableCell style={{width:'20%'}}>
                Note: Interest rates are highly depedent on repo rate, RBI policies & inflation
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>

      
    </>
  )
}

export default Instruments