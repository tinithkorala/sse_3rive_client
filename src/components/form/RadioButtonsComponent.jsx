import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const RadioButtonsComponent = ({ label, formik, field, radioList }) => {
  const fieldId = `row-radio-buttons-group-label-${field}`;

  return (
    <>
      <Typography id={fieldId}>{`Enter your ${label}`}</Typography>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby={fieldId}
          name={field}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values?.[field]}
        >
          {radioList?.map((el) => (
            <FormControlLabel
              key={el}
              value={el}
              control={<Radio />}
              label={el}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};

RadioButtonsComponent.propTypes = {
  label: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
  field: PropTypes.string.isRequired,
  radioList: PropTypes.array.isRequired,
};

export default RadioButtonsComponent;
