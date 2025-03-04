import React from "react";
import { TextField, InputLabel, Box } from "@mui/material";

const CustomTextField = ({ label, id, placeholder, required = false, fullWidth = true, variant = "outlined", ...props }) => {
  return (
    <Box className="custom-textfield-wrapper" gap={1}>
      <InputLabel className="custom-textfield-wrapper-label" htmlFor={id}> {label} {required && <span className="required-icon">*</span>}</InputLabel>
      <TextField id={id} placeholder={placeholder} variant={variant} fullWidth={fullWidth} {...props} />
    </Box>
  );
};

export default CustomTextField;
