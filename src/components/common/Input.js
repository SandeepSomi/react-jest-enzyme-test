import React from 'react';
import { Input as TextField, InputLabel, FormControl, FormHelperText } from '@material-ui/core';

const Input = (props) => {
  const {
    error = false,
    className,
    fullWidth = false,
    label,
    required = false,
    ...restProps
  } = props;

  return (
    <FormControl fullWidth={fullWidth} className={error ? 'form-control-error' : 'form-control'}>
      <InputLabel htmlFor="adornment-password">{label}{required ? <sup>*</sup> : null }</InputLabel>
      <TextField
        {...restProps}
      />
      {error ? <FormHelperText id="component-error-text">{error}</FormHelperText>: null }
    </FormControl>
  );
}

export default Input;