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

export default function DialogAnalysis({open,handleClose,data,onChange,handleFormSubmit}) {
 const {id,month,income,expense,note}=data


  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Update details</DialogTitle>
        <DialogContent>
         <form>
         <FormControl margin="dense" fullWidth>
            <InputLabel id="outlined-read-only-input" required>Month</InputLabel>
            <Select
                readOnly
              labelId="demo-simple-select-label"
              id="outlined-read-only-input"
              required
              value={month}
              label="Month"
              name="month"
            >
              <MenuItem value="January">January</MenuItem>
              <MenuItem value="February">February</MenuItem>
              <MenuItem value="March">March</MenuItem>
              <MenuItem value="April">April</MenuItem>
              <MenuItem value="May">May</MenuItem>
              <MenuItem value="June">June</MenuItem>
              <MenuItem value="July">July</MenuItem>
              <MenuItem value="August">August</MenuItem>
              <MenuItem value="September">September</MenuItem>
              <MenuItem value="October">October</MenuItem>
              <MenuItem value="November">November</MenuItem>
              <MenuItem value="December">December</MenuItem>

            </Select>
          </FormControl>
             <TextField name="income" value={income} onChange={e=>onChange(e)} label="Income" required variant="outlined" type='number' margin="dense" fullWidth/>
             <TextField name="expense" value={expense} onChange={e=>onChange(e)} label="Expense" required variant="outlined" margin="dense" fullWidth type='number' />
             <TextField name="note" value={note} onChange={e=>onChange(e)} label="Note" variant="outlined" margin="dense" fullWidth />

             {/* <TextField id="category" value={category} onChange={e=>onChange(e)} label="Category" required variant="outlined" margin="dense" fullWidth /> */}

         </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button  color="primary"                
           onClick={handleFormSubmit} variant="contained">
            {"Update"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}