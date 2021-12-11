import {  TextField } from "@material-ui/core";
import React from "react";
interface FormikFieldProps {
  courseName: String;
  label: string;
}

 
const FormsUI: React.FC<FormikFieldProps> = ({ id, name, label, type, value, onChange, error, helperText }) => {
   
  return (
    <div className="FormikField">
      
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
