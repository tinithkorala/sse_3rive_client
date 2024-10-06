import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PropTypes from "prop-types";
import moment from "moment";
import { FormHelperText, Stack, Typography } from "@mui/material";

const DatePickerComponent = ({ label, formik, field }) => {
  return (
    <Stack direction="column" sx={{width: "100%"}}>
      <Typography className="form-label">{`Enter your ${label}`}</Typography>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          name={field}
          onChange={(selectedDate) => {
            const normalizedDate = selectedDate.startOf("day");
            formik.handleChange({
              target: {
                name: field,
                value: normalizedDate,
              },
            });
          }}
          onBlur={formik.handleBlur}
          value={formik.values?.[field] || moment().startOf("day")}
          error={formik.touched[field] && Boolean(formik.errors[field])}
          placeholder={`Enter ${label}`}
          helperText={formik.touched[field] && formik.errors[field]}
          size="small"
          format="YYYY/MM/DD"
          formatDensity="dense"
          closeOnSelect={true}
          slotProps={{ textField: { size: "small" } }}
        />
      </LocalizationProvider>
      <FormHelperText error={true}>
        {formik.touched[field] && formik.errors[field]}
      </FormHelperText>
    </Stack>
  );
};

DatePickerComponent.propTypes = {
  label: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
  field: PropTypes.string.isRequired,
};

export default DatePickerComponent;
