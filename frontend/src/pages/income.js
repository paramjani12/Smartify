import React, { useMemo, useState } from 'react';

import { useEffect } from 'react';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


import DialogIncome from './dialogincome';
import IncomeChart from './incomechart';

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



const initialValue = {particular:"", amount:"", date:"", category:"", note:""}






const rowHeight = 48;


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const IncomePage = () => {
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
const url = `http://localhost:4000/income`
const columnDefs = [
  { headerName: "Particular", field: "particular",},
  { headerName: "Amount", field: "amount", },
  { headerName: "Date", field: "date",   sortable: true},
  { headerName: "Category", field: "category" },
  { headerName: "Note", field: "note" },
  {
    headerName: "Actions", field: "id", cellRendererFramework: (params) => <div>
      <Button style={{marginRight:'10px'}} variant="outlined" color="primary" onClick={() => handleUpdate(params.data)}>Update</Button>
      <Button variant="outlined" color="error" onClick={() => handleDelete(params.value)}>Delete</Button>
    </div>
  }
]
// calling getProTask function for first time 
useEffect(() => {
  getIncome()
}, [])

//fetching user data from server
const getIncome = () => {
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
//deleting a user
const handleDelete = (id) => {
  // const confirm = window.confirm("Are you sure, you want to delete this row", id)
  // if (confirm) {
    handleClick1()
    fetch(url + `/${id}`, { method: "DELETE" }).then(resp => resp.json()).then(resp => {
      
      getIncome()
    })
  // }
}
const handleFormSubmit = () => {
  if (formData.id) {
    //updating a user 

    fetch(url + `/${formData.id}`, {
      method: "PUT", body: JSON.stringify(formData), headers: {
        'content-type': "application/json"
      }
    }).then(resp => resp.json())
      .then(resp => {
        handleClose()
        getIncome()

      })
      handleClick2()
  } else {
    // adding new user
    fetch(url, {
      method: "POST", body: JSON.stringify(formData), headers: {
        'content-type': "application/json"
      }
    }).then(resp => resp.json())
      .then(resp => {
        handleClose()
        getIncome()
      })
      handleClick3()
  }
}

const defaultColDef = {
  flex: 1, filter: true,
  resizable: true

}


const [openSnack1, setOpenSnack1] = React.useState(false);
const [openSnack2, setOpenSnack2] = React.useState(false);
const [openSnack3, setOpenSnack3] = React.useState(false);

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


const handleClick3 = () => {
  setOpenSnack3(true);
};

const handleCloseSnack3 = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpenSnack3(false);
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
            <Button size="large" 
                variant="contained" 
                endIcon={<PlaylistAddIcon />} 
                onClick={handleClickOpen}
                >
                    Add Income
              </Button>

              

            <Button size="large" variant="contained" endIcon={<PieChartIcon />}
                onClick={handleClickOpen1}
            >
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

        <DialogIncome open={open} handleClose={handleClose}
        data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
        

        
        <IncomeChart open1={open1} handleClose1={handleClose1}/>

        <Snackbar open={openSnack1} autoHideDuration={3000} onClose={handleCloseSnack1}>
          <Alert onClose={handleCloseSnack1} severity="error" sx={{ width: '100%' }}>
            Your income detail is deleted!
          </Alert>
      </Snackbar>
      <Snackbar open={openSnack2} autoHideDuration={3000} onClose={handleCloseSnack2}>
          <Alert onClose={handleCloseSnack2} severity="info" sx={{ width: '100%' }}>
            Your income detail is updated!
          </Alert>
      </Snackbar>
      <Snackbar open={openSnack3} autoHideDuration={3000} onClose={handleCloseSnack3}>
          <Alert onClose={handleCloseSnack3} severity="success" sx={{ width: '100%' }}>
            Your income detail is added successfully!
          </Alert>
      </Snackbar>

    </>
  )
}

export default IncomePage
