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
 const {id,particular,amount,date,category,method,note}=data



 


  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{id?"Update Expense":"Add New Expense"}</DialogTitle>
        <DialogContent>
         <form>
             <TextField name="particular" value={particular} onChange={e=>onChange(e)} label="Particular" required variant="outlined" margin="dense" fullWidth/>
             <TextField name="amount" value={amount} onChange={e=>onChange(e)} label="Amount" required variant="outlined" margin="dense" fullWidth type='number' />
             <TextField name="date" value={date} format='DD/MM/YYYY' onChange={e=>onChange(e)} type='date' required label="Date" variant="outlined" margin="dense" fullWidth 
               InputLabelProps={{
                shrink: true,
              }}             
             />
            {/* <FormControl margin="dense" fullWidth>
            <InputLabel id="demo-simple-select-label" required>Category</InputLabel>

            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            InputLabelProps={{
              shrink: true,
            }}
            name="category"  onChange={e=>onChange(e)} value={category}>
              <MenuItem value="Node">Node</MenuItem>
              <MenuItem value="PHP">PHP</MenuItem>
              <MenuItem value="Java">Java</MenuItem>
            </Select>
          </FormControl> */}

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
              <MenuItem value="Grocery">Grocery</MenuItem>
              <MenuItem value="Utility">Utility</MenuItem>
              <MenuItem value="Rent">Rent</MenuItem>
              <MenuItem value="Vehicle">Vehicle</MenuItem>
              <MenuItem value="Insurance">Insurance</MenuItem>
              <MenuItem value="EMI">EMI</MenuItem>
              <MenuItem value="Entertainment">Entertainment</MenuItem>
              <MenuItem value="Personal-Care">Personal Care</MenuItem>
              <MenuItem value="Education">Education</MenuItem>
              <MenuItem value="Miscellaneous">Miscellaneous</MenuItem>

            </Select>
          </FormControl>
             {/* <TextField id="category" value={category} onChange={e=>onChange(e)} label="Category" required variant="outlined" margin="dense" fullWidth /> */}

             <TextField name="method" value={method} onChange={e=>onChange(e)} label="Payment Method" required variant="outlined" margin="dense" fullWidth />
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