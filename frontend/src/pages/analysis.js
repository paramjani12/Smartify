import React, { useMemo, useState } from 'react';

import { useEffect } from 'react';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


import DialogAnalysis from './dialoganalysis';
import AnalysisChart from './analysischart';

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
import Button from '@mui/material/Button';
import PieChartIcon from '@mui/icons-material/PieChart';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import img1 from "../images/logo.svg";
import {logout, selectUser} from "../features/userSlice"

import { useHistory } from "react-router-dom";


import { useDispatch, useSelector } from "react-redux";

const settings = ['My Profile', 'Dashboard', 'Logout'];



const initialValue = {month:"", income:"0", expense:"0", note:""}






const rowHeight = 48;


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const AnalysisPage = () => {
// this dispatch is for redux

   const dispatch = useDispatch()

   const history = useHistory();

   //for avatar

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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



  const [open1, setOpen1] = React.useState(false);
  const handleClickOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);


const [gridApi, setGridApi] = useState(null)
const [tableData, setTableData] = useState(null)
const [open, setOpen] = React.useState(false);
const [formData, setFormData] = useState(initialValue)






const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
  setFormData(initialValue)
};
const url = `http://localhost:4000/analysis`
const columnDefs = [
  { headerName: "Month", field: "month"},
  { headerName: "Income", field: "income"},
  { headerName: "Expense", field: "expense"},
  { headerName: "Note", field: "note" },
  {
    headerName: "Actions", field: "id", cellRendererFramework: (params) => <div>
      <Button style={{marginRight:'10px'}} variant="outlined" color="primary" onClick={() => handleUpdate(params.data)}>Update</Button>
      <Button variant="outlined" color="error" onClick={() => handleReset(params.value)}>Reset</Button>

    </div>
  }
]
// calling getProTask function for first time 
useEffect(() => {
  getAnalysis()
}, [])

//fetching user data from server
const getAnalysis = () => {
  fetch(url).then(resp => resp.json()).then(resp => setTableData(resp))
}
// const onChange = (e) => {
//   const { value, id } = e.target
//   // console.log(value,id)
//   setFormData({ ...formData, [id]: value })
// }

const onChange = event => {
  const value =event.target.value;
  // console.log(value);
  setFormData({
    ...formData,
    [event.target.name]: value
  });
};

const onGridReady = (params) => {
  setGridApi(params)
}

// setting update row data to form data and opening pop up window
const handleUpdate = (oldData) => {
  setFormData(oldData)
  handleClickOpen()
}

// let resetData={income:"0", expense:"0", note:""}
const handleReset = (id) =>{
let month="";
  if(id==1){
    month="January"
  }
  else if(id==2){
    month="February"
  }
  else if(id==3){
    month="March"
  }
  else if(id==4){
    month="April"
  }
  else if(id==5){
    month="May"
  }
  else if(id==6){
    month="June"
  }
  else if(id==7){
    month="July"
  }
  else if(id==8){
    month="August"
  }
  else if(id==9){
    month="September"
  }
  else if(id==10){
    month="October"
  }
  else if(id==11){
    month="November"
  }
  else if(id==12){
    month="December"
  }

    let newData={month:month,expense:0, income:0, note:""}
    console.log(id)
    fetch(url + `/${id}`, {
      method: "PUT", body: JSON.stringify(newData), headers: {
        'content-type': "application/json"
      }
    }).then(resp => resp.json())
      .then(resp => {
        getAnalysis()

      })
      handleClick1()
}


const handleFormSubmit = () => {
  if (formData.id) {
    //updating a user 
    // console.log(formData)
    fetch(url + `/${formData.id}`, {
      method: "PUT", body: JSON.stringify(formData), headers: {
        'content-type': "application/json"
      }
    }).then(resp => resp.json())
      .then(resp => {
        handleClose()
        getAnalysis()

      })
      handleClick2()
  }
}

const defaultColDef = {
  flex: 1, filter: true,
  resizable: true

}

const [openSnack1, setOpenSnack1] = React.useState(false);
const [openSnack2, setOpenSnack2] = React.useState(false);


const handleClick1 = () => {
  setOpenSnack1(true);
};

const handleCloseSnack1 = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpenSnack1(false);
};



const handleClick2 = () => {
  setOpenSnack2(true);
};

const handleCloseSnack2 = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpenSnack2(false);
};






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

            <Button size="large" variant="contained" endIcon={<PieChartIcon />}
                onClick={handleClickOpen1}            >
                Chart
            </Button>
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
        <div className="ag-theme-alpine" style={{ overflow: 'hidden', overflowY: 'hidden', overflowX:'hidden', height: 665, width: 1515  }}>
         <AgGridReact 
            rowData={tableData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}
            rowHeight={rowHeight}
          />
        </div>

        <DialogAnalysis open={open} handleClose={handleClose}
        data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
        

        
        <AnalysisChart open1={open1} handleClose1={handleClose1}/>
        <Snackbar open={openSnack1} autoHideDuration={3000} onClose={handleCloseSnack1}>
          <Alert onClose={handleCloseSnack1} severity="error" sx={{ width: '100%' }}>
            Your detail is reset!
          </Alert>
        </Snackbar>
        <Snackbar open={openSnack2} autoHideDuration={3000} onClose={handleCloseSnack2}>
          <Alert onClose={handleCloseSnack2} severity="info" sx={{ width: '100%' }}>
            Your detail is updated!
          </Alert>
        </Snackbar>

    </>
  )
}

export default AnalysisPage
