import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';



import './dialogexpense.css';

export default function DialogBank({open,handleClose,data,onChange,handleFormSubmit}) {
 const {id,bank,holder,number,customerid,ifsc,note}=data



 


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
             <TextField name="bank" value={bank} onChange={e=>onChange(e)} label="Bank Name" variant="outlined" margin="dense" fullWidth/>
             <TextField name="holder" value={holder} onChange={e=>onChange(e)} label="Account Holder"  variant="outlined" margin="dense" fullWidth />
             <TextField name="number" value={number} onChange={e=>onChange(e)} label="Account Number" variant="outlined" margin="dense" fullWidth />
             <TextField name="customerid" value={customerid} onChange={e=>onChange(e)} label="Customer ID"  variant="outlined" margin="dense" fullWidth />
             <TextField name="ifsc" value={ifsc} onChange={e=>onChange(e)} label="IFSC Code"  variant="outlined" margin="dense" fullWidth />
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