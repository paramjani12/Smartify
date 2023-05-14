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

export default function DialogExpense({open,handleClose,data,onChange,handleFormSubmit}) {
 const {id,particular,amount,date,category,note}=data;

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{id?"Update Income Detail":"Add New Income Detail"}</DialogTitle>
        <DialogContent>
         <form>
             <TextField name="particular" value={particular} onChange={e=>onChange(e)} label="Particular" required variant="outlined" margin="dense" fullWidth/>
             <TextField name="amount" value={amount} onChange={e=>onChange(e)} label="Amount" required variant="outlined" margin="dense" fullWidth type='number' />
             <TextField name="date" value={date} format='DD/MM/YYYY' onChange={e=>onChange(e)} type='date' required label="Date" variant="outlined" margin="dense" fullWidth 
               InputLabelProps={{
                shrink: true,
              }}             
             />

          <FormControl margin="dense" fullWidth>
            <InputLabel id="demo-simple-select-label" required>Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              required
              value={category}
              onChange={e=>onChange(e)}
              label="Category"
              name="category"
            >
              <MenuItem value="Salary">Salary</MenuItem>
              <MenuItem value="Interest">Interest</MenuItem>
              <MenuItem value="Divident">Divident</MenuItem>
              <MenuItem value="Rental-Income">Rental Income</MenuItem>
              <MenuItem value="ROI">ROI</MenuItem>
              <MenuItem value="Miscellaneous">Miscellaneous</MenuItem>
            </Select>
          </FormControl>
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