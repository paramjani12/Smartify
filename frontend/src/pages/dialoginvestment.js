import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




import './dialogexpense.css';

export default function DialogInvestment({open,handleClose,data,onChange,handleFormSubmit}) {
 const {id,detail,start,maturity,amount,renewal,maturity_amount}=data



 


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
             <TextField name="detail" value={detail} onChange={e=>onChange(e)} label="Detail" variant="outlined" margin="dense" fullWidth required/>
             
             <TextField name="start" value={start} onChange={e=>onChange(e)} label="Start Date" variant="outlined" margin="dense" fullWidth type='date' 
              InputLabelProps={{
                shrink: true,
              }} 
              required
             />
             <TextField name="maturity" value={maturity} onChange={e=>onChange(e)} label="Maturity" variant="outlined" margin="dense" fullWidth type='date'
              InputLabelProps={{
                shrink: true,
              }} 
              required
             />
             <TextField name="amount" value={amount} onChange={e=>onChange(e)} label="Investment Amount" variant="outlined" margin="dense" fullWidth required />
            <FormControl margin="dense" fullWidth>
            <InputLabel id="demo-simple-select-label" required>Renewal</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              required
              value={renewal}
              onChange={e=>onChange(e)}
              label="Renewal"
              name="renewal"
            >
              <MenuItem value="Monthly">Monthly</MenuItem>
              <MenuItem value="Quaterly">Quaterly</MenuItem>
              <MenuItem value="Annually">Annually</MenuItem>
              <MenuItem value="Lump-sum">Lump-sum</MenuItem>
            </Select>
            </FormControl>
             <TextField name="maturity_amount" value={maturity_amount} onChange={e=>onChange(e)} label="Maturity Amount"  variant="outlined" margin="dense" fullWidth required/>

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