import * as React from "react";
import './userhome.css';
// import { useNavigate } from 'react-router-dom';
import { useHistory } from "react-router-dom";

// import AuthContext from "../contexts/authContext";
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
import Typography from '@mui/material/Typography';
import img1 from "../images/logo.svg";
import { UilClipboardNotes } from '@iconscout/react-unicons'
import { UilCrockery } from '@iconscout/react-unicons'
import { UilKeyholeCircle } from '@iconscout/react-unicons'
import { UilRupeeSign } from '@iconscout/react-unicons'
import { UilChartLine } from '@iconscout/react-unicons'
import { UilHouseUser } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from "react-redux";
import {logout, selectUser} from "../features/userSlice"

import {Link} from 'react-router-dom';



const pages = [];
const settings = ['My Profile', 'Dashboard', 'Logout'];


const UserHomePage = ({ userName }) => {
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

  // const ctx = React.useContext(AuthContext);



  // let navigate = useNavigate();
  const handleTask = () => {
    history.push("/task")
  }
  const handleDiet = () => {
    history.push("/diet")
  }
  const handlePassword = () => {
    history.push("/email")
  }
  const handleTracker = () => {
    history.push("/tracker")
  }

  const handleFinance = () => {
    history.push("/finance")
  }


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
    <section className="cs">
      <div className="container c_container">
        <div className="c_left">
            <h1>Hello {user.userName} </h1>
            <p>Welcome to smarter life! We are pleased to offer you assistance in you day-to-day activites. You can utilize the task manager for creating to-do for your professional or personal work.  Set all your passwords safe using password keeper. We help keep track of your expenses, income and get chart based analysis of the same. Our financial buddy will help you in achieving your goals in faster and secured fashion. We would be really happy to cater your personally. Your can reach out to us by clicking the link below.</p>
            <a href="#" className="btn">Contact Us</a>

        </div>
        <div className="c_right">
          <Link to="/task" style={{ textDecoration: 'none' }}>
          <article className="c">
            <span className="c_icon c_icon1">
              <UilClipboardNotes className='imp'/>
            </span>
            <h5>Task Manager</h5>
            <p>Manage your personal and professional work efficiently</p>
          </article>
          </Link>
          <Link to="/diet" style={{ textDecoration: 'none' }}>
          <article className="c">
            <span className="c_icon c_icon2">
              <UilCrockery className='imp'/>
            </span>
            <h5>Diet Scheduler</h5>
            <p>Schedule your weekly food menu along with calorie intake</p>
          </article>
          </Link>
          <Link to="/email" style={{ textDecoration: 'none' }}>
          <article className="c">
            <span className="c_icon c_icon3">
              <UilKeyholeCircle className='imp'/>
            </span>
            <h5>Password Keeper</h5>
            <p>Keep your app details, passwords, bank info safe and secured</p>
          </article>
          </Link>
          <Link to="/tracker" style={{ textDecoration: 'none' }}>
          <article className="c">
            <span className="c_icon c_icon4">
              <UilRupeeSign className='imp'/>
            </span>
            <h5>Expense Tracker</h5>
            <p>Track your expenses and income along with monthly analysis</p>
          </article>
          </Link>
          <Link to="/finance" style={{ textDecoration: 'none' }}>
          <article className="c">
            <span className="c_icon c_icon5">
              <UilChartLine className='imp'/>
            </span>
            <h5>Financial Buddy</h5>
            <p>Help you in achieving your goals in fast and secured fashion</p>
          </article>
          </Link>
          <Link to="/retire" style={{ textDecoration: 'none' }}>
          <article className="c">
            <span className="c_icon c_icon6">
              <UilHouseUser className='imp'/>
            </span>
            <h5>Retirement Planner</h5>
            <p>Plan your invesments such that you can retire early</p>
          </article>
          </Link>
        </div>
      </div>
    </section>


    </>
  )
}

export default UserHomePage