import React, { useRef } from 'react';
import './scheduler.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useReactToPrint} from 'react-to-print';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import DownloadIcon from '@mui/icons-material/Download';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import TextField from '@mui/material/TextField';
import img1 from "../images/logo.svg";
import {logout, selectUser} from "../features/userSlice"

import { useHistory } from "react-router-dom";


import { useDispatch, useSelector } from "react-redux";

let userOutput;
const settings = ['My Profile', 'Dashboard', 'Logout'];



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const SchedulerPage = () => {
// this dispatch is for redux

   const dispatch = useDispatch()

   const history = useHistory();

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  


  React.useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  
  const handleBeforeUnload = (e) => {
    e.preventDefault();
    const message =
      "Are you sure you want to leave? All provided data will be lost.";
    e.returnValue = message;
    return message;
  };

    



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




  const user = useSelector(selectUser);
  const str = user.userName;
  let acronym = str.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')


// modal

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);


const [day, setDay] = React.useState('');
const [meal, setMeal] = React.useState('');
const [mealDetail, setMealDetail] = React.useState('');
const [calories, setCalories] = React.useState('');


  const handleChangeDay = (event) => {
    setDay(event.target.value);
  };

  const handleChangeMeal = (event) => {
    setMeal(event.target.value);
  };



  const getInformation = () =>{
    localStorage.setItem("dayInfo", day)
    localStorage.setItem("mealInfo", meal)
    localStorage.setItem("mealDetailInfo", mealDetail)
    localStorage.setItem("caloriesInfo", calories)
}


  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle:'Diet Planner',
    onAfterPrint: () => alert('Print Sucess')
  })


  return (
    <>
        <AppBar position="static" style={{backgroundColor:"#1D3557" , color:"#F1FAEE"}}>
        <Container maxWidth="xl">
            <Toolbar disableGutters style={{display:'flex', justifyContent:'space-between'}}>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
                <img src={img1} style={{height:'46px', marginTop:'3px', paddingTop:'1px'}} alt="icon"/>
            </Typography>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
                <img src={img1} style={{height:'46px', marginTop:'3px', paddingTop:'1px'}} alt="icon"/>
            </Typography>
            <Button size="large" 
                variant="contained" 
                endIcon={<PlaylistAddIcon />} 
                onClick={handleOpen}
                >
                    Add Food
              </Button>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Food Details
                  </Typography>
                  <Typography id="modal-modal-description" 
                  sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                  }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Day</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={day}
                        label="Day"
                        onChange={handleChangeDay}
                        >
                        <MenuItem value={1}>Sunday</MenuItem>
                        <MenuItem value={2}>Monday</MenuItem>
                        <MenuItem value={3}>Tuesday</MenuItem>
                        <MenuItem value={4}>Wednesday</MenuItem>
                        <MenuItem value={5}>Thrusday</MenuItem>
                        <MenuItem value={6}>Friday</MenuItem>
                        <MenuItem value={7}>Saturday</MenuItem>
                        </Select>
                    </FormControl>                   
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Meal</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={meal}
                        label="Meal"
                        onChange={handleChangeMeal}
                        >
                        <MenuItem value={1}>Breakfast</MenuItem>
                        <MenuItem value={2}>Lunch</MenuItem>
                        <MenuItem value={3}>Snacks</MenuItem>
                        <MenuItem value={4}>Dinner</MenuItem>
                        </Select>
                    </FormControl>                   
                    <TextField id="outlined-basic" label="Meal Description" variant="outlined" 
                          value={mealDetail}
                            onChange={(e) => {
                                setMealDetail(e.target.value);
                            }} />
                    <TextField id="outlined-basic" label="Calories" variant="outlined"
                    value={calories}
                    onChange={(e) => {
                        setCalories(e.target.value);
                    }} />
                  </Typography>
                  <Typography style={{marginTop:'25px'}}>
                    <Button variant="contained" onClick={getInformation}>Add</Button>
                  </Typography>
                </Box>
              </Modal>
              <Button size="large" variant="contained" endIcon={<DownloadIcon />} onClick={handlePrint}>Download</Button>
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
    <table className="table table-bordered tablefood"  ref={componentRef} >
    <thead className="headingcolor">
      <tr >
        <th></th>
        <th>Sunday</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thrusday</th>
        <th>Friday</th>
        <th>Saturday</th>
      </tr>
    </thead>
    <tbody>
      <tr className="rowsize">
        <td style={{backgroundColor: "#dbd8d8"}}>Breakfast</td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={4}
          />
        </td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={4}
          />
        </td>
        <td>
        <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={4}
          />
        </td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={4}
          />
        </td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={4}
          />
        </td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={4}
          />
        </td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={4}
          />
        </td>
      </tr>
      <tr className="rowsize">
        <td style={{backgroundColor: "#dbd8d8"}}>Lunch</td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={5}
          />
        </td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={5}
          />
        </td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={5}
          />
        </td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={5}
          />
        </td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={5}
          />
        </td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={5}
          />
        </td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={5}
          />
        </td>
      </tr>
      <tr className="rowsize">
        <td style={{backgroundColor: "#dbd8d8"}}>Snacks</td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={4}
          />
        </td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={4}
          />
        </td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={4}
          />
        </td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={4}
          />
        </td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={4}
          />
        </td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={4}
          />
        </td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={4}
          />
        </td>
      </tr>
      <tr className="rowsize">
        <td style={{backgroundColor: "#dbd8d8"}}>Dinner</td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={5}
          />
        </td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={5}
          />
        </td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={5}
          />
        </td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={5}
          />
        </td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={5}
          />
        </td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={5}
          />
        </td>
        <td>
          <TextField id="outlined-basic" label="Meal Desc" variant="outlined" defaultValue="Calories:" multiline rows={5}
          />
        </td>
      </tr>
    </tbody>
  </table>
        

    </>
  )
}

export default SchedulerPage
