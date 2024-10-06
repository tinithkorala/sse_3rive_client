import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const TextComponent = ({ formik, label, field, type }) => {
  return (
    <TextField
      required
      fullWidth
      label={`Enter your ${label}`}
      name={field}
      type={type}
      onChange={formik?.handleChange}
      onBlur={formik?.handleBlur}
      value={formik?.values?.[field]}
      error={formik?.touched?.[field] && Boolean(formik?.errors?.[field])}
      helperText={formik?.touched?.[field] && formik?.errors?.[field]}
      size="small"
    />
  );
};

TextComponent.propTypes = {
  formik: PropTypes.object.isRequired,
  field: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextComponent;
