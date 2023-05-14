import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';



import './dialogexpense.css';

export default function DialogExpense({open,handleClose,data,onChange,handleFormSubmit}) {
 const {id,app,userid,email,password,linked,note}=data



 


  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{id?"Update Details":"Add New Details"}</DialogTitle>
        <DialogContent>
         <form>
             <TextField name="app" value={app} onChange={e=>onChange(e)} label="Application" required variant="outlined" margin="dense" fullWidth/>
             <TextField name="userid" value={userid} onChange={e=>onChange(e)} label="User ID"  variant="outlined" margin="dense" fullWidth />
             <TextField name="email" value={email} onChange={e=>onChange(e)} label="Email" variant="outlined" margin="dense" fullWidth />
             <TextField name="password" value={password} onChange={e=>onChange(e)} label="Password"  variant="outlined" margin="dense" fullWidth />
             <TextField name="linked" value={linked} onChange={e=>onChange(e)} label="Linked Account"  variant="outlined" margin="dense" fullWidth />
             <TextField name="note" value={note} onChange={e=>onChange(e)} label="Note" variant="outlined" margin="dense" fullWidth />
         </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button  color="primary" onClick={()=>handleFormSubmit()} variant="contained">
            {id?"Update":"Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}