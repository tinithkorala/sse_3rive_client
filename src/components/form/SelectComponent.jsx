import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const SelectComponent = ({ label, formik, field, menuList }) => {
  const fieldId = `select-label-${field}`;

  return (
    <>
      <Typography id={fieldId}>{`Enter your ${label}`}</Typography>
      <FormControl fullWidth size="small">
        <Select
          labelId={fieldId}
          id={`select-${field}`}
          name={field}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values?.[field]}
        >
          {menuList?.map((el) => (
            <MenuItem key={el.keyword} value={el.keyword}>
              {el.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

SelectComponent.propTypes = {
  label: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
  field: PropTypes.string.isRequired,
  menuList: PropTypes.array.isRequired,
};

export default SelectComponent;
