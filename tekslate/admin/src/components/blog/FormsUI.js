import {  makeStyles, TextField } from "@material-ui/core";
import React from "react";
interface FormikFieldProps {
  courseName: String;
  label: string;
}

  
const FormsUI: React.FC<FormikFieldProps> = ({ id, name, label, type, value, onChange, error, helperText }) => {
  return (
    <div className="FormikField">
      {/* <FormControl fullWidth className={classes.margin} variant="outlined" >
        <InputLabel htmlFor="outlined-adornment-amount">{name}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
        //   value={values.amount}
        //   onChange={handleChange("amount")}
        labelWidth={60}
        required
        autoComplete="off"
        as={TextField}
        label={label}
        name={name}
        fullWidth
        // helperText="test"
        />
      </FormControl> */}
      {/* <TextField
          error
          id="outlined-error-helper-text"
          label={label}
          helperText={<ErrorMessage name={name}/>}
          variant="outlined"
          required
        autoComplete="off"
            as={TextField}
            name={name}
            fullWidth
        /> */}
         <TextField
          id={id}
          label={label}
          value={value}
          onChange={onChange}
          variant="outlined"
          required
          autoComplete="off"
          name={name}
          fullWidth
          style={{backgroundColor: '#fffff9'}}
          helperText={helperText}
          size="small"
        />
      
    </div>
  );
};

export default FormsUI;
