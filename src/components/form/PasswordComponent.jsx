import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";

const PasswordComponent = ({ formik, label, field }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const fieldId = `outlined-adornment-${field}`;

  return (
    <>
      <Typography>{`Enter your ${label}`}</Typography>
      <FormControl
        sx={{ m: 1, width: "25ch" }}
        variant="outlined"
        required
        error={formik?.touched?.[field] && Boolean(formik?.errors?.[field])}
      >
        <OutlinedInput
          id={fieldId}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          fullWidth
          name={field}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values?.[field]}
          size="small"
        />
        {formik.touched?.[field] && formik.errors?.[field] && (
          <FormHelperText>{formik.errors?.[field]}</FormHelperText>
        )}
      </FormControl>
    </>
  );
};

PasswordComponent.propTypes = {
  formik: PropTypes.object.isRequired,
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default PasswordComponent;
